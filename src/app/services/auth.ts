import { Injectable } from '@angular/core';
import { User } from '@supabase/supabase-js';
import { Supabase } from './supabase';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  constructor(
    private supabaseService: Supabase
  ) {}

  async login(
    email: string,
    password: string
  ): Promise<{ user: User | null; error: string | null }> {

    const { data, error } =
      await this.supabaseService.client.auth.signInWithPassword({
        email,
        password
      });

    if (error) {
      return {
        user: null,
        error: error.message
      };
    }

    return {
      user: data.user,
      error: null
    };
  }

  async logout(): Promise<string | null> {

    const { error } =
      await this.supabaseService.client.auth.signOut();

    return error ? error.message : null;
  }

  async getCurrentUser(): Promise<User | null> {

    const { data, error } =
      await this.supabaseService.client.auth.getUser();

    if (error) {
      return null;
    }

    return data.user;
  }

}
