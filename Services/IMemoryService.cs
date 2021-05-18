using FirstCoreAngularTry.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FirstCoreAngularTry.Services
{
    public interface IMemoryService
    {
        Task<IEnumerable<Memory>> GetMemoriesList();
        Task<Memory> GetMemoryById(int id);
        Task<Memory> CreateMemory(Memory Memory);
        Task UpdateMemory(Memory Memory);
        Task DeleteMemory(Memory Memory);
    }
}
