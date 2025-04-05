export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      assessment_data: {
        Row: {
          assessment_id: string
          coach_user_id: string | null
          created_at: string
          id: string
          name: string
          updated_at: string
          user_id: string
          value: string | null
        }
        Insert: {
          assessment_id: string
          coach_user_id?: string | null
          created_at?: string
          id?: string
          name: string
          updated_at?: string
          user_id: string
          value?: string | null
        }
        Update: {
          assessment_id?: string
          coach_user_id?: string | null
          created_at?: string
          id?: string
          name?: string
          updated_at?: string
          user_id?: string
          value?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "assessment_data_assessment_id_fkey"
            columns: ["assessment_id"]
            isOneToOne: false
            referencedRelation: "assessments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "assessment_data_coach_user_id_fkey"
            columns: ["coach_user_id"]
            isOneToOne: false
            referencedRelation: "checkins_user"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "assessment_data_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      assessments: {
        Row: {
          created_at: string
          created_by_id: string | null
          description: string | null
          id: string
          name: string
          type: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          created_by_id?: string | null
          description?: string | null
          id?: string
          name: string
          type: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          created_by_id?: string | null
          description?: string | null
          id?: string
          name?: string
          type?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "assessments_created_by_id_fkey"
            columns: ["created_by_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      checkins: {
        Row: {
          assessment_ids: string[] | null
          created_at: string
          created_by_id: string
          id: string
          name: string | null
          notes: string | null
          tags: string[] | null
          updated_at: string
        }
        Insert: {
          assessment_ids?: string[] | null
          created_at?: string
          created_by_id: string
          id?: string
          name?: string | null
          notes?: string | null
          tags?: string[] | null
          updated_at?: string
        }
        Update: {
          assessment_ids?: string[] | null
          created_at?: string
          created_by_id?: string
          id?: string
          name?: string | null
          notes?: string | null
          tags?: string[] | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "checkins_created_by_id_fkey"
            columns: ["created_by_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      checkins_user: {
        Row: {
          assessment_data_ids: string[] | null
          assessment_ids: string[] | null
          checkin_id: string | null
          complete: boolean | null
          created_at: string
          id: string
          name: string | null
          notes: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          assessment_data_ids?: string[] | null
          assessment_ids?: string[] | null
          checkin_id?: string | null
          complete?: boolean | null
          created_at?: string
          id?: string
          name?: string | null
          notes?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          assessment_data_ids?: string[] | null
          assessment_ids?: string[] | null
          checkin_id?: string | null
          complete?: boolean | null
          created_at?: string
          id?: string
          name?: string | null
          notes?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "checkins_user_checkin_id_fkey"
            columns: ["checkin_id"]
            isOneToOne: false
            referencedRelation: "checkins"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "checkins_user_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      exercise_data: {
        Row: {
          created_at: string
          exercise_id: string | null
          exercise_index: number | null
          exercise_name: string | null
          id: string
          instruction_id: string | null
          notes: string | null
          reps: number | null
          rest: number | null
          rpe: number | null
          updated_at: string
          user_id: string | null
          weight: number | null
          workout_user_id: string | null
        }
        Insert: {
          created_at?: string
          exercise_id?: string | null
          exercise_index?: number | null
          exercise_name?: string | null
          id?: string
          instruction_id?: string | null
          notes?: string | null
          reps?: number | null
          rest?: number | null
          rpe?: number | null
          updated_at?: string
          user_id?: string | null
          weight?: number | null
          workout_user_id?: string | null
        }
        Update: {
          created_at?: string
          exercise_id?: string | null
          exercise_index?: number | null
          exercise_name?: string | null
          id?: string
          instruction_id?: string | null
          notes?: string | null
          reps?: number | null
          rest?: number | null
          rpe?: number | null
          updated_at?: string
          user_id?: string | null
          weight?: number | null
          workout_user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "exercise_data_exercise_id_fkey"
            columns: ["exercise_id"]
            isOneToOne: false
            referencedRelation: "exercises"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "exercise_data_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "exercise_data_workout_user_id_fkey"
            columns: ["workout_user_id"]
            isOneToOne: false
            referencedRelation: "workouts_user"
            referencedColumns: ["id"]
          },
        ]
      }
      exercises: {
        Row: {
          created_at: string
          created_by_id: string | null
          description: string | null
          equipment: string | null
          id: string
          muscles: string[] | null
          name: string | null
          type: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          created_by_id?: string | null
          description?: string | null
          equipment?: string | null
          id?: string
          muscles?: string[] | null
          name?: string | null
          type?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          created_by_id?: string | null
          description?: string | null
          equipment?: string | null
          id?: string
          muscles?: string[] | null
          name?: string | null
          type?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "exercises_created_by_id_fkey"
            columns: ["created_by_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      murph: {
        Row: {
          complete: boolean | null
          created_at: string
          email: string
          id: string
          mile_one: number | null
          mile_two: number | null
          name: string | null
          pullups: number | null
          pushups: number | null
          squats: number | null
          total_time: string | null
          updated_at: string | null
        }
        Insert: {
          complete?: boolean | null
          created_at?: string
          email: string
          id?: string
          mile_one?: number | null
          mile_two?: number | null
          name?: string | null
          pullups?: number | null
          pushups?: number | null
          squats?: number | null
          total_time?: string | null
          updated_at?: string | null
        }
        Update: {
          complete?: boolean | null
          created_at?: string
          email?: string
          id?: string
          mile_one?: number | null
          mile_two?: number | null
          name?: string | null
          pullups?: number | null
          pushups?: number | null
          squats?: number | null
          total_time?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          active: boolean | null
          created_at: string | null
          email: string | null
          first_name: string | null
          id: string
          last_name: string | null
          role: string | null
          updated_at: string | null
        }
        Insert: {
          active?: boolean | null
          created_at?: string | null
          email?: string | null
          first_name?: string | null
          id: string
          last_name?: string | null
          role?: string | null
          updated_at?: string | null
        }
        Update: {
          active?: boolean | null
          created_at?: string | null
          email?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          role?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      workouts: {
        Row: {
          created_at: string
          created_by_id: string | null
          id: string
          instructions: Json | null
          name: string
          notes: string | null
          tags: string[] | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          created_by_id?: string | null
          id?: string
          instructions?: Json | null
          name: string
          notes?: string | null
          tags?: string[] | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          created_by_id?: string | null
          id?: string
          instructions?: Json | null
          name?: string
          notes?: string | null
          tags?: string[] | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "workouts_created_by_id_fkey"
            columns: ["created_by_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      workouts_user: {
        Row: {
          complete: boolean | null
          created_at: string | null
          goal: string | null
          id: string
          instructions: Json | null
          name: string | null
          notes: string | null
          sets: string[] | null
          updated_at: string | null
          user_id: string | null
          workout_id: string | null
        }
        Insert: {
          complete?: boolean | null
          created_at?: string | null
          goal?: string | null
          id?: string
          instructions?: Json | null
          name?: string | null
          notes?: string | null
          sets?: string[] | null
          updated_at?: string | null
          user_id?: string | null
          workout_id?: string | null
        }
        Update: {
          complete?: boolean | null
          created_at?: string | null
          goal?: string | null
          id?: string
          instructions?: Json | null
          name?: string | null
          notes?: string | null
          sets?: string[] | null
          updated_at?: string | null
          user_id?: string | null
          workout_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "workouts_user_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workouts_user_workout_id_fkey"
            columns: ["workout_id"]
            isOneToOne: false
            referencedRelation: "workouts"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
