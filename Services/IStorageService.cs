using FirstCoreAngularTry.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FirstCoreAngularTry.Services
{
    public interface IStorageService
    {
        Task<IEnumerable<Storage>> GetStoragesList();
        Task<Storage> GetStorageById(int id);
        Task<Storage> CreateStorage(Storage storage);
        Task UpdateStorage(Storage storage);
        Task DeleteStorage(Storage storage);
    }
}
