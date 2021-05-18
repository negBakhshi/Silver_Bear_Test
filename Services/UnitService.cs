using FirstCoreAngularTry.Data;
using FirstCoreAngularTry.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FirstCoreAngularTry.Services
{
    public class UnitService : IUnitService
    {
        private readonly SilverBearDBContext _dbcontext;

        public UnitService(SilverBearDBContext dbcontext)
        {
            _dbcontext = dbcontext;
        }

        public async Task<IEnumerable<Unit>> GetUnitsList()
        {
            return await _dbcontext.Units
                .ToListAsync();
        }

        public async Task<Unit> GetUnitById(int id)
        {
            return await _dbcontext.Units
                .FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<Unit> CreateUnit(Unit Unit)
        {
            _dbcontext.Units.Add(Unit);
            await _dbcontext.SaveChangesAsync();
            return Unit;
        }
        public async Task UpdateUnit(Unit Unit)
        {
            _dbcontext.Units.Update(Unit);
            await _dbcontext.SaveChangesAsync();
        }

        public async Task DeleteUnit(Unit Unit)
        {
            _dbcontext.Units.Remove(Unit);
            await _dbcontext.SaveChangesAsync();
        }
    }
}
