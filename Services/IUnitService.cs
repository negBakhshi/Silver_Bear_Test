using FirstCoreAngularTry.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FirstCoreAngularTry.Services
{
    public interface IUnitService
    {
        Task<IEnumerable<Unit>> GetUnitsList();
        Task<Unit> GetUnitById(int id);
        Task<Unit> CreateUnit(Unit unit);
        Task UpdateUnit(Unit unit);
        Task DeleteUnit(Unit unit);
    }
}
