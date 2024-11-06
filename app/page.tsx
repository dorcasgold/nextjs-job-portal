import { UserButton } from "@clerk/nextjs";


export default function Home() {
  return (
//     <div className="flex justify-between">
//       <div>
//         <p>Logo</p>
//       </div>
//       <div>
//  <SignedOut>
//         <SignInButton>
//           <Button>Login</Button>
//         </SignInButton>
//       </SignedOut>
//       <SignedIn>
//         <UserButton />
//      </SignedIn>
//       </div>
    //    </div>
    
    <div className="flex justify-between">
      <h1>Logo</h1>
      <UserButton/>
    </div>
  );
}
