import EditProfileForm from "@/components/forms/ProfileForm/EditProfileForm";
import styles from "../profile.module.scss";
import { getAllCountries } from "@/server/common/getAllCountries";
import { getUserDetailsById } from "@/server/users/getUserDetailsById";
const EditProfile=async()=>{
    const countryLists=await getAllCountries();
    const userDetails= await getUserDetailsById();
    // console.log("Country List",countryLits);
    return(
        <section className={styles.edit_profile_form_container}>
            <div className="container">
                <EditProfileForm countryLists={countryLists} userDetails={userDetails}/>
            </div>
        </section>
    )
}

export default EditProfile;