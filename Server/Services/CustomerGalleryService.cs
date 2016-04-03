using System;
using System.Collections.Generic;
using Chloe.Server.Data.Contracts;
using Chloe.Server.Dtos;
using Chloe.Server.Services.Contracts;
using System.Data.Entity;
using System.Linq;
using Chloe.Server.Models;

namespace Chloe.Server.Services
{
    public class CustomerGalleryService : ICustomerGalleryService
    {
        public CustomerGalleryService(IChloeUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.CustomerGalleries;
            this.cache = cacheProvider.GetCache();
        }

        public CustomerGalleryAddOrUpdateResponseDto AddOrUpdate(CustomerGalleryAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .Where(x => x.Id == request.Id && x.IsDeleted == false)
                .FirstOrDefault();
            if (entity == null) repository.Add(entity = new CustomerGallery());
            entity.Name = request.Name;
            uow.SaveChanges();
            return new CustomerGalleryAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<CustomerGalleryDto> Get()
        {
            ICollection<CustomerGalleryDto> response = new HashSet<CustomerGalleryDto>();
            var entities = repository.GetAll().Where(x => x.IsDeleted == false).ToList();
            foreach(var entity in entities) { response.Add(new CustomerGalleryDto(entity)); }    
            return response;
        }


        public CustomerGalleryDto GetById(int id)
        {
            return new CustomerGalleryDto(repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IChloeUow uow;
        protected readonly IRepository<CustomerGallery> repository;
        protected readonly ICache cache;
    }
}
