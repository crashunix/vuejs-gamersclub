import Api from "./Api";
import authHeader from "./auth/auth-header";

export default {
  all() {
    return Api.get("posts");
  },
  recent() {
    return Api.get("posts?_limit=6&_sort=published_at:DESC");
  },
  show(id) {
    return Api({
      method: "POST",
      url: "graphql",
      headers: { headers: authHeader() },
      data: {
        query: `
            {
                query Query(${id}: ID!, 'LIVE': PublicationState) {
                    post(id: $postId, publicationState: $postPublicationState) {
                      id
                      published_at
                      title
                      subtitle
                      content
                      image {
                        id
                        alternativeText
                        caption
                        formats
                        url
                      }
                      categories {
                        id
                        name
                      }
                      tags {
                        id
                        tag
                      }
                    }
                  }
            }
        `,
      },
    });
  },
};
