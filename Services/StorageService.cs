using FirstCoreAngularTry.Data;
using FirstCoreAngularTry.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FirstCoreAngularTry.Services
{
    public class StorageService : IStorageService
    {
        private readonly SilverBearDBContext _dbcontext;

        public StorageService(SilverBearDBContext dbcontext)
        {
            _dbcontext = dbcontext;
        }

        public async Task<IEnumerable<Storage>> GetStoragesList()
        {
            return await _dbcontext.Storages
                .Where(s => !s.Archived)
                .Include(x => x.Memory)
                .Include(x => x.Memory.Unit)
                .ToListAsync();
        }

        public async Task<Storage> GetStorageById(int id)
        {
            return await _dbcontext.Storages
                .Include(x => x.Memory)
                .FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<Storage> CreateStorage(Storage storage)
        {
            _dbcontext.Storages.Add(storage);
            await _dbcontext.SaveChangesAsync();
            return storage;
        }
        public async Task UpdateStorage(Storage storage)
        {
            _dbcontext.Storages.Update(storage);
            await _dbcontext.SaveChangesAsync();
        }

        public async Task DeleteStorage(Storage storage)
        {
            _dbcontext.Storages.Remove(storage);
            await _dbcontext.SaveChangesAsync();
        }
    }
}
