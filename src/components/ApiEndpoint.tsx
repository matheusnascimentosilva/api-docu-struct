
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

interface ApiEndpointProps {
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  path: string;
  description: string;
  request?: {
    body?: string;
    headers?: Record<string, string>;
  };
  response?: string;
}

const methodColors = {
  GET: "bg-green-100 text-green-800",
  POST: "bg-blue-100 text-blue-800",
  PUT: "bg-yellow-100 text-yellow-800",
  DELETE: "bg-red-100 text-red-800",
  PATCH: "bg-purple-100 text-purple-800",
};

const ApiEndpoint = ({ method, path, description, request, response }: ApiEndpointProps) => {
  return (
    <Card className="p-6 mb-8 border border-doc-border animate-fade-in">
      <div className="flex items-center gap-4 mb-4">
        <Badge className={`font-mono ${methodColors[method]}`}>{method}</Badge>
        <code className="px-2 py-1 bg-doc-code rounded text-sm">{path}</code>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      
      {request && (
        <div className="mb-6">
          <h3 className="text-sm font-medium mb-2">Request</h3>
          {request.headers && (
            <div className="mb-4">
              <h4 className="text-sm text-gray-500 mb-2">Headers</h4>
              <pre className="bg-doc-code p-4 rounded-md overflow-x-auto">
                <code>{JSON.stringify(request.headers, null, 2)}</code>
              </pre>
            </div>
          )}
          {request.body && (
            <div>
              <h4 className="text-sm text-gray-500 mb-2">Body</h4>
              <pre className="bg-doc-code p-4 rounded-md overflow-x-auto">
                <code>{request.body}</code>
              </pre>
            </div>
          )}
        </div>
      )}
      
      {response && (
        <div>
          <h3 className="text-sm font-medium mb-2">Response</h3>
          <pre className="bg-doc-code p-4 rounded-md overflow-x-auto">
            <code>{response}</code>
          </pre>
        </div>
      )}
    </Card>
  );
};

export default ApiEndpoint;
