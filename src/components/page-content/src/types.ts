export interface pageType {
  total: number;
  pageSize: number;
  current: number;
  showTotal?: (total: number) => string;
  showQuickJumper?: boolean;
  showSizeChanger?: boolean;
}
