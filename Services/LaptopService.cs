using FirstCoreAngularTry.Data;
using FirstCoreAngularTry.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FirstCoreAngularTry.Services
{
    public class LaptopService : ILaptopService
    {
        private readonly SilverBearDBContext _dbcontext;

        public LaptopService(SilverBearDBContext dbcontext)
        {
            _dbcontext = dbcontext;
        }

        public async Task<IEnumerable<Laptop>> GetLaptopsList()
        {
            return await _dbcontext.Laptops
                .Include(x => x.Memory)
                .Include(x => x.Memory.Unit)
                .Include(x => x.Storage)
                .Include(x => x.Storage.Memory)
                .Include(x => x.Storage.Memory.Unit)
                .Include(x => x.GraphicCard)
                .Include(x => x.GraphicCard.Model)
                .Include(x => x.GraphicCard.Model.Brand)
                .Include(x => x.Cpu)
                .Include(x => x.Cpu.Brand)
                .Include(x => x.Port)
                .Include(x => x.Port.Unit)
                .Include(x => x.PowerUnit)
                .Include(x => x.WeightUnit)
                .ToListAsync();
        }

        public async Task<Laptop> GetLaptopById(int id)
        {
            return await _dbcontext.Laptops
                .FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<Laptop> CreateLaptop(Laptop laptop)
        {
            _dbcontext.Laptops.Add(laptop);
            await _dbcontext.SaveChangesAsync();
            return laptop;
        }
        public async Task UpdateLaptop(Laptop laptop)
        {
            _dbcontext.Laptops.Update(laptop);
            await _dbcontext.SaveChangesAsync();
        }

        public async Task DeleteLaptop(Laptop laptop)
        {
            _dbcontext.Laptops.Remove(laptop);
            await _dbcontext.SaveChangesAsync();
        }
    }
}

