using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using HuutoNet.Models;
using Newtonsoft.Json;

namespace HuutoNet.Services
{
    public class HuutoNetService : IHuutoNetService
    {
        private static HttpClient _httpClient = new HttpClient();

        private async Task<HttpResponseMessage> CreateSendRequest(HttpMethod method, string uri, StringContent content = null)
        {
            var request = new HttpRequestMessage(method, new Uri(uri));

            if (content != null)
            {
                request.Content = content;
            }

            var response = await _httpClient.SendAsync(request);
            return response;
        }

        public async Task<HuutoNetCategories> GetAllCategories()
        {
            var response = await CreateSendRequest(HttpMethod.Get, "https://api.huuto.net/1.1/categories");
            response.EnsureSuccessStatusCode();
            var stringResponse = await response.Content.ReadAsStringAsync();
            var categories = JsonConvert.DeserializeObject<HuutoNetCategories>(stringResponse);
            return categories;
        }
    }
}
