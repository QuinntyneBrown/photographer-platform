using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class GalleryDto
    {
        public GalleryDto(Gallery entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public GalleryDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
