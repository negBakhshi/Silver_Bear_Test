using FirstCoreAngularTry.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FirstCoreAngularTry.Services
{
    public interface IBrandService
    {
        Task<IEnumerable<Brand>> GetBrandsList();
        Task<Brand> GetBrandById(int id);
        Task<Brand> CreateBrand(Brand brand);
        Task UpdateBrand(Brand brand);
        Task DeleteBrand(Brand brand);
    }
}
