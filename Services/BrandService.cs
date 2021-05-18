using FirstCoreAngularTry.Data;
using FirstCoreAngularTry.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FirstCoreAngularTry.Services
{
    public class BrandService : IBrandService
    {
        private readonly SilverBearDBContext _dbcontext;

        public BrandService(SilverBearDBContext dbcontext)
        {
            _dbcontext = dbcontext;
        }

        public async Task<IEnumerable<Brand>> GetBrandsList()
        {
            return await _dbcontext.Brands
                .Where(b => !b.Archived)
                .ToListAsync();
        }

        public async Task<Brand> GetBrandById(int id)
        {
            return await _dbcontext.Brands
                .FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<Brand> CreateBrand(Brand brand)
        {
            _dbcontext.Brands.Add(brand);
            await _dbcontext.SaveChangesAsync();
            return brand;
        }
        public async Task UpdateBrand(Brand brand)
        {
            _dbcontext.Brands.Update(brand);
            await _dbcontext.SaveChangesAsync();
        }

        public async Task DeleteBrand(Brand brand)
        {
            brand.Archived = true;
            _dbcontext.Brands.Update(brand);
            await _dbcontext.SaveChangesAsync();
        }
    }
}
