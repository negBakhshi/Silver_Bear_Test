using FirstCoreAngularTry.Data;
using FirstCoreAngularTry.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FirstCoreAngularTry.Services
{
    public class GraphicCardModelService : IGraphicCardModelService
    {
        private readonly SilverBearDBContext _dbcontext;

        public GraphicCardModelService(SilverBearDBContext dbcontext)
        {
            _dbcontext = dbcontext;
        }

        public async Task<IEnumerable<GraphicCardModel>> GetGraphicCardModelsList()
        {
            return await _dbcontext.GraphicCardModels
                .Where(m => !m.Archived)
                .Include(x => x.Brand)
                .ToListAsync();
        }

        public async Task<GraphicCardModel> GetGraphicCardModelById(int id)
        {
            return await _dbcontext.GraphicCardModels
                .Include(x => x.Brand)
                .FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<GraphicCardModel> CreateGraphicCardModel(GraphicCardModel gcModel)
        {
            _dbcontext.GraphicCardModels.Add(gcModel);
            await _dbcontext.SaveChangesAsync();
            return gcModel;
        }
        public async Task UpdateGraphicCardModel(GraphicCardModel gcModel)
        {
            _dbcontext.GraphicCardModels.Update(gcModel);
            await _dbcontext.SaveChangesAsync();
        }

        public async Task DeleteGraphicCardModel(GraphicCardModel gcModel)
        {
            _dbcontext.GraphicCardModels.Remove(gcModel);
            await _dbcontext.SaveChangesAsync();
        }
    }
}
