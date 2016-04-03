using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class GalleryAddOrUpdateResponseDto: GalleryDto
    {
        public GalleryAddOrUpdateResponseDto(Gallery entity)
            :base(entity)
        {

        }
    }
}
