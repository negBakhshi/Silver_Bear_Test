using FirstCoreAngularTry.Data;
using FirstCoreAngularTry.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FirstCoreAngularTry.Services
{
    public class CPUService : ICPUService
    {
        private readonly SilverBearDBContext _dbcontext;

        public CPUService(SilverBearDBContext dbcontext)
        {
            _dbcontext = dbcontext;
        }

        public async Task<IEnumerable<Cpu>> GetCPUsList()
        {
            return await _dbcontext.Cpus
                .Where(c => !c.Archived)
                .Include(x => x.Brand)
                .ToListAsync();
        }

        public async Task<Cpu> GetCPUById(int id)
        {
            return await _dbcontext.Cpus
                .Include(x => x.Brand)
                .FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<Cpu> CreateCPU(Cpu CPU)
        {
            _dbcontext.Cpus.Add(CPU);
            await _dbcontext.SaveChangesAsync();
            return CPU;
        }
        public async Task UpdateCPU(Cpu CPU)
        {
            _dbcontext.Cpus.Update(CPU);
            await _dbcontext.SaveChangesAsync();
        }

        public async Task DeleteCPU(Cpu CPU)
        {
            _dbcontext.Cpus.Remove(CPU);
            await _dbcontext.SaveChangesAsync();
        }
    }
}
