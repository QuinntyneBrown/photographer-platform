using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class CustomerGalleryDto
    {
        public CustomerGalleryDto(CustomerGallery entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public CustomerGalleryDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
