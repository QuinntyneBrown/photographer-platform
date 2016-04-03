using Chloe.Server.Dtos;
using System.Collections.Generic;

namespace Chloe.Server.Services.Contracts
{
    public interface ICustomerGalleryService
    {
        CustomerGalleryAddOrUpdateResponseDto AddOrUpdate(CustomerGalleryAddOrUpdateRequestDto request);
        ICollection<CustomerGalleryDto> Get();
        CustomerGalleryDto GetById(int id);
        dynamic Remove(int id);
    }
}
