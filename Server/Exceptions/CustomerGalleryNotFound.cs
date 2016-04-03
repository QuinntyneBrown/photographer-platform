using System;

namespace Chloe.Server.Exceptions
{
    public class CustomerGalleryNotFoundException: NotFoundException
    {
        public CustomerGalleryNotFoundException()
            :base("You Tube Video Not Found")
        {
        }

        public CustomerGalleryNotFoundException(string message)
            :base(message)
        {

        }

        public CustomerGalleryNotFoundException(string message, Exception inner)
        {

        }
    }
}
