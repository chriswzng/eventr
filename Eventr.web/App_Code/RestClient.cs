using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;

/// <summary>
/// Summary description for RestClient
/// </summary>
public class RestClient
{
    private WebClient HttpClient;

	public RestClient()
	{
        HttpClient = new WebClient();
	}

    public RestClient(string accessToken)
    {
        HttpClient = new WebClient();
        HttpClient.QueryString.Add("oauth_token", accessToken);
        HttpClient.QueryString.Add("oauth_signature_method", "HMAC-SHA1");
        HttpClient.QueryString.Add("oauth_nonce", "LEAOAU");
        HttpClient.QueryString.Add("oauth_version", "1.0");
        //HttpClient.QueryString.Add("oauth_signature", "5WXXnruxh+k7QVlBF7BnYFsYLAU=");
    }

    public string GetFacebookAccessToken()
    {
        HttpClient.QueryString.Add("client_id", "903664066366504");
        HttpClient.QueryString.Add("client_secret", "46f1495831af757b9ecd51333f1a2606");
        HttpClient.QueryString.Add("grant_type", "client_credentials");

        string result = HttpClient.DownloadString(new Uri("https://graph.facebook.com/oauth/access_token", UriKind.Absolute));
        return result.Split('=').LastOrDefault();
    }

    public void GetPlaces(string location)
    {
        HttpClient.QueryString.Add("q", location);
        HttpClient.QueryString.Add("type", "place");
        
        string result = HttpClient.DownloadString(new Uri("https://graph.facebook.com/v2.3/search", UriKind.Absolute));
        JsonConvert.DeserializeObject<string>(result);
    }
}