import Avatar from "./_components/avatar";
import MiniNavbar from "./_components/miniNavbar";
import ProfileData from "./_components/profileData";

export default function Profile() {
    return(
        <div className="bg-transparent h-full">
            {/* <MiniNavbar /> */}
            <Avatar />
            <ProfileData />
        </div>
    )
}