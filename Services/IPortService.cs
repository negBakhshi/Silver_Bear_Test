using FirstCoreAngularTry.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FirstCoreAngularTry.Services
{
    public interface IPortService
    {
        Task<IEnumerable<Port>> GetPortsList();
        Task<Port> GetPortById(int id);
        Task<Port> CreatePort(Port port);
        Task UpdatePort(Port port);
        Task DeletePort(Port port);
    }
}
