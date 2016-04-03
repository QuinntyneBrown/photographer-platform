using Chloe.Server.Dtos;
using System.Collections.Generic;

namespace Chloe.Server.Services.Contracts
{
    public interface IGalleryService
    {
        GalleryAddOrUpdateResponseDto AddOrUpdate(GalleryAddOrUpdateRequestDto request);
        ICollection<GalleryDto> Get();
        GalleryDto GetById(int id);
        dynamic Remove(int id);
    }
}
