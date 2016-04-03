using Chloe.Server.Dtos;
using System.Collections.Generic;

namespace Chloe.Server.Services.Contracts
{
    public interface ICustomerService
    {
        CustomerAddOrUpdateResponseDto AddOrUpdate(CustomerAddOrUpdateRequestDto request);
        ICollection<CustomerDto> Get();
        CustomerDto GetById(int id);
        dynamic Remove(int id);
    }
}
