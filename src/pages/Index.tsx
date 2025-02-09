
import DocLayout from "@/components/DocLayout";
import ApiEndpoint from "@/components/ApiEndpoint";

const Index = () => {
  return (
    <DocLayout>
      <section id="introduction" className="mb-12">
        <span className="text-sm font-medium text-doc-accent">Overview</span>
        <h1 className="text-4xl font-bold mt-2 mb-4">Introduction</h1>
        <p className="text-gray-600 leading-relaxed">
          Welcome to our API documentation. This API provides a comprehensive set of endpoints
          for managing users and their associated data. Use this documentation to learn how
          to interact with our API endpoints.
        </p>
      </section>

      <section id="authentication" className="mb-12">
        <span className="text-sm font-medium text-doc-accent">Security</span>
        <h2 className="text-3xl font-bold mt-2 mb-4">Authentication</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          All API endpoints require authentication using Bearer tokens. Include your API key
          in the Authorization header of your requests.
        </p>
        <ApiEndpoint
          method="GET"
          path="/api/auth/token"
          description="Generate a new API token for authentication."
          request={{
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer YOUR_API_KEY",
            },
          }}
          response={`{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expires_in": 3600
}`}
        />
      </section>

      <section id="users" className="mb-12">
        <span className="text-sm font-medium text-doc-accent">Resources</span>
        <h2 className="text-3xl font-bold mt-2 mb-4">Users</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          Endpoints for managing user resources in the API.
        </p>
        <ApiEndpoint
          method="GET"
          path="/api/users"
          description="Retrieve a list of users with pagination support."
          request={{
            headers: {
              "Authorization": "Bearer YOUR_API_TOKEN",
            },
          }}
          response={`{
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "created_at": "2024-03-14T12:00:00Z"
    }
  ],
  "total": 100,
  "page": 1,
  "per_page": 10
}`}
        />
        <ApiEndpoint
          method="POST"
          path="/api/users"
          description="Create a new user in the system."
          request={{
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer YOUR_API_TOKEN",
            },
            body: `{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "password": "secure_password123"
}`
          }}
          response={`{
  "id": 2,
  "name": "Jane Doe",
  "email": "jane@example.com",
  "created_at": "2024-03-14T12:30:00Z"
}`}
        />
      </section>
    </DocLayout>
  );
};

export default Index;
