using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class CustomerGalleryAddOrUpdateResponseDto: CustomerGalleryDto
    {
        public CustomerGalleryAddOrUpdateResponseDto(CustomerGallery entity)
            :base(entity)
        {

        }
    }
}
