
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

interface UseApiQueryResult<T> {
  data: T | null;
  isLoading: boolean;
  isError: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export function useApiQuery<T>(
  fetchFn: () => Promise<{data?: T; error?: string; status: number}>,
  dependencies: any[] = []
): UseApiQueryResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const fetchData = async () => {
    setIsLoading(true);
    setIsError(false);
    setError(null);

    try {
      const response = await fetchFn();
      
      if (response.error) {
        setIsError(true);
        setError(response.error);
        toast({
          title: "Error",
          description: response.error,
          variant: "destructive",
        });
      } else if (response.data) {
        setData(response.data);
      }
    } catch (err) {
      setIsError(true);
      const errorMessage = err instanceof Error ? err.message : "An unknown error occurred";
      setError(errorMessage);
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, dependencies);

  return { data, isLoading, isError, error, refetch: fetchData };
}

export function useApiMutation<T, R = T>(
  mutationFn: (data: T) => Promise<{data?: R; error?: string; status: number}>,
  options?: {
    onSuccess?: (data: R) => void;
    onError?: (error: string) => void;
  }
) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<R | null>(null);
  const { toast } = useToast();

  const mutate = async (mutationData: T) => {
    setIsLoading(true);
    setIsError(false);
    setError(null);

    try {
      const response = await mutationFn(mutationData);
      
      if (response.error) {
        setIsError(true);
        setError(response.error);
        toast({
          title: "Error",
          description: response.error,
          variant: "destructive",
        });
        options?.onError?.(response.error);
      } else if (response.data) {
        setData(response.data);
        toast({
          title: "Success",
          description: "Operation completed successfully",
        });
        options?.onSuccess?.(response.data);
      }
      return response;
    } catch (err) {
      setIsError(true);
      const errorMessage = err instanceof Error ? err.message : "An unknown error occurred";
      setError(errorMessage);
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
      options?.onError?.(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return { mutate, isLoading, isError, error, data };
}
