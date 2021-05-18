using FirstCoreAngularTry.Data;
using FirstCoreAngularTry.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FirstCoreAngularTry.Services
{
    public class PortService : IPortService
    {
        private readonly SilverBearDBContext _dbcontext;

        public PortService(SilverBearDBContext dbcontext)
        {
            _dbcontext = dbcontext;
        }

        public async Task<IEnumerable<Port>> GetPortsList()
        {
            return await _dbcontext.Ports
                .Include(x => x.Unit)
                .ToListAsync();
        }

        public async Task<Port> GetPortById(int id)
        {
            return await _dbcontext.Ports
                .Include(x => x.Unit)
                .FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<Port> CreatePort(Port port)
        {
            _dbcontext.Ports.Add(port);
            await _dbcontext.SaveChangesAsync();
            return port;
        }
        public async Task UpdatePort(Port port)
        {
            _dbcontext.Ports.Update(port);
            await _dbcontext.SaveChangesAsync();
        }

        public async Task DeletePort(Port port)
        {
            _dbcontext.Ports.Remove(port);
            await _dbcontext.SaveChangesAsync();
        }
    }
}
