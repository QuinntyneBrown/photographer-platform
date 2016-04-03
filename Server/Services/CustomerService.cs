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
    public class CustomerService : ICustomerService
    {
        public CustomerService(IChloeUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.Customers;
            this.cache = cacheProvider.GetCache();
        }

        public CustomerAddOrUpdateResponseDto AddOrUpdate(CustomerAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .Where(x => x.Id == request.Id && x.IsDeleted == false)
                .FirstOrDefault();
            if (entity == null) repository.Add(entity = new Customer());
            entity.Name = request.Name;
            uow.SaveChanges();
            return new CustomerAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<CustomerDto> Get()
        {
            ICollection<CustomerDto> response = new HashSet<CustomerDto>();
            var entities = repository.GetAll().Where(x => x.IsDeleted == false).ToList();
            foreach(var entity in entities) { response.Add(new CustomerDto(entity)); }    
            return response;
        }


        public CustomerDto GetById(int id)
        {
            return new CustomerDto(repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IChloeUow uow;
        protected readonly IRepository<Customer> repository;
        protected readonly ICache cache;
    }
}
