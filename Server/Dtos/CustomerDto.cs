using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class CustomerDto
    {
        public CustomerDto(Customer entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public CustomerDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
