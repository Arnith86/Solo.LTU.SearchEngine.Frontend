// Interface that matches our SearchResponse in backend
export interface SearchResultItem {
    id: number;
    title: string;    // FRQ-3013
    url: string;
    pageRankScore: number;
    TflDfScore: number;
    // snippet: string;  // FRQ-3014
    language: string
}

export interface SearchResponse {
    searchResults: SearchResultItem[];
    metaData: PaginationMetaData;
    message: string; 
    ignoredTokens?: IgnoredToken[]
}

export interface PaginationMetaData{
    currentPage: number;
    hasNext: boolean;
    hasPrevious: boolean;
    pageSize: number;
    totalItemCount: number;
    totalPages: number;
}

export interface IgnoredToken {
    token: string;
    language: string;
}