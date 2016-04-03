using Chloe.Server.Models;

namespace Chloe.Server.Data.Contracts
{
    public interface IChloeUow
    {
        IRepository<User> Users { get; }
        IRepository<Customer> Customers { get; }
        IRepository<CustomerGallery> CustomerGalleries { get; }
        IRepository<Gallery> Galleries { get; }
        void SaveChanges();
    }
}
