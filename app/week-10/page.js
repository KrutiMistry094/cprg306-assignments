"use client";

import { useUserAuth } from "./_utils/auth-context";
export default function MainPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const signIn = async () => {
    await gitHubSignIn();
  };

  const signOut = async () => {
    await firebaseSignOut();
  };

  return (
    <div>
      {user ? (
        <div>
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>
          <button onClick={signOut}>Sign Out</button>
          <div>
            <a href="/week-10/shopping-list">Continue to your Shopping List</a>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-4xl font-bold mb-5">Shopping List App</h1>
          <button onClick={signIn}>Sign in with GitHub</button>
        </div>
      )}
    </div>
  );
}
