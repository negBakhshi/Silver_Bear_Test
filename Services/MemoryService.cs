using FirstCoreAngularTry.Data;
using FirstCoreAngularTry.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FirstCoreAngularTry.Services
{
    public class MemoryService : IMemoryService
    {
        private readonly SilverBearDBContext _dbcontext;

        public MemoryService(SilverBearDBContext dbcontext)
        {
            _dbcontext = dbcontext;
        }

        public async Task<IEnumerable<Memory>> GetMemoriesList()
        {
            return await _dbcontext.Memories
                .Where(m => !m.Archived)
                .Include(x => x.Unit)
                .ToListAsync();
        }

        public async Task<Memory> GetMemoryById(int id)
        {
            return await _dbcontext.Memories
                .Include(x => x.Unit)
                .FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<Memory> CreateMemory(Memory memory)
        {
            _dbcontext.Memories.Add(memory);
            await _dbcontext.SaveChangesAsync();
            return memory;
        }
        public async Task UpdateMemory(Memory memory)
        {
            _dbcontext.Memories.Update(memory);
            await _dbcontext.SaveChangesAsync();
        }

        public async Task DeleteMemory(Memory memory)
        {
            _dbcontext.Memories.Remove(memory);
            await _dbcontext.SaveChangesAsync();
        }
    }
}
