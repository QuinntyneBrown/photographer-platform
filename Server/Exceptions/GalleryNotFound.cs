using System;

namespace Chloe.Server.Exceptions
{
    public class GalleryNotFoundException: NotFoundException
    {
        public GalleryNotFoundException()
            :base("You Tube Video Not Found")
        {
        }

        public GalleryNotFoundException(string message)
            :base(message)
        {

        }

        public GalleryNotFoundException(string message, Exception inner)
        {

        }
    }
}
