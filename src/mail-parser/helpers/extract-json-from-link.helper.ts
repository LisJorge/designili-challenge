import axios from "axios";

export async function extractJsonFromLink(link: string): Promise<object> {
    try {
      const response = await axios.get(link);
      if (response.status === 200) {
        const contentType = response.headers['content-type'];
        if (contentType && contentType.includes('application/json')) {
          return response.data;
        }
      }
    } catch (error) {
      console.error(`Error fetching JSON from link: ${link}`, error);
    }
  }