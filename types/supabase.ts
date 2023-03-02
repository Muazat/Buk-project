export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      Assignments: {
        Row: {
          category: string | null;
          created_at: string | null;
          due_date: string | null;
          id: number;
          status: string | null;
          title: string | null;
        };
        Insert: {
          category?: string | null;
          created_at?: string | null;
          due_date?: string | null;
          id?: number;
          status?: string | null;
          title?: string | null;
        };
        Update: {
          category?: string | null;
          created_at?: string | null;
          due_date?: string | null;
          id?: number;
          status?: string | null;
          title?: string | null;
        };
      };
      "Lecturer's classes": {
        Row: {
          course_name: string;
          created_at: string | null;
          description: string | null;
          id: number;
          shared_code: string | null;
        };
        Insert: {
          course_name: string;
          created_at?: string | null;
          description?: string | null;
          id?: number;
          shared_code?: string | null;
        };
        Update: {
          course_name?: string;
          created_at?: string | null;
          description?: string | null;
          id?: number;
          shared_code?: string | null;
        };
      };
      Notes: {
        Row: {
          category: string | null;
          created_at: string | null;
          description: string | null;
          has_attachment: boolean | null;
          id: number;
          title: string | null;
        };
        Insert: {
          category?: string | null;
          created_at?: string | null;
          description?: string | null;
          has_attachment?: boolean | null;
          id?: number;
          title?: string | null;
        };
        Update: {
          category?: string | null;
          created_at?: string | null;
          description?: string | null;
          has_attachment?: boolean | null;
          id?: number;
          title?: string | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
