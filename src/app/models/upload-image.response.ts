export class UploadImageResponse {
  constructor(
    public status: string,
    public code: number,
    public message: string,
    public filename: string
  ) {}
}
