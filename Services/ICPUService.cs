using FirstCoreAngularTry.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FirstCoreAngularTry.Services
{
    public interface ICPUService
    {
        Task<IEnumerable<Cpu>> GetCPUsList();
        Task<Cpu> GetCPUById(int id);
        Task<Cpu> CreateCPU(Cpu cpu); // check for being uniq
        Task UpdateCPU(Cpu cpu);
        Task DeleteCPU(Cpu cpu);
    }
}
