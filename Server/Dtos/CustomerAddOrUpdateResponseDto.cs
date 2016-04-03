using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class CustomerAddOrUpdateResponseDto: CustomerDto
    {
        public CustomerAddOrUpdateResponseDto(Customer entity)
            :base(entity)
        {

        }
    }
}
