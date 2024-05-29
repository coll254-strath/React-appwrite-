import {Client, Account, Databases} from 'appwrite'


/*  In your create react setup,remember to download the appwrite project using npm */

const client = new Client();
/*Enter credentials from Appwrite config on the appwrite website */
client.setEndpoint("/* ******* */").setProject(" /* *******  */")

export const account = new Account(client)

//Database
/* Generate from the appwrite dashboard,remember to allow permissions  */
export const databases = new Databases(client, " /* ***** */")