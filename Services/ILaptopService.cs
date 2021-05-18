using FirstCoreAngularTry.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FirstCoreAngularTry.Services
{
    public interface ILaptopService
    {
        Task<IEnumerable<Laptop>> GetLaptopsList();
        Task<Laptop> GetLaptopById(int id);
        Task<Laptop> CreateLaptop(Laptop laptop);
        Task UpdateLaptop(Laptop laptop);
        Task DeleteLaptop(Laptop laptop);
    }
}
