using System;

namespace Chloe.Server.Exceptions
{
    public class CustomerNotFoundException: NotFoundException
    {
        public CustomerNotFoundException()
            :base("You Tube Video Not Found")
        {
        }

        public CustomerNotFoundException(string message)
            :base(message)
        {

        }

        public CustomerNotFoundException(string message, Exception inner)
        {

        }
    }
}
