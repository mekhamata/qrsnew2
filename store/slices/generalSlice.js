import { createSlice } from '@reduxjs/toolkit';
// create a slice
export const generalSlice = createSlice({
  name: 'siteData',
  initialState: {
    sitename: 'Qrs Medical',
    sitemail: 'info@qrs-global.com',
    sitetelephone: '04-6860006',
    sitephone: '054-2021912',
    sitephone2: '054-3023043',
    siteaddress: 'רחוב תובל, פארק תעשייה קורן, מעלות',
  },
  reducers: {
    getSiteName: (state, action) => {
      state.sitename = action.payload;
    },
  },
});

export const { getSiteName } = generalSlice.actions;
export const showSiteName = (state) => state.generaldata.sitename;
export const showSiteMail = (state) => state.generaldata.sitemail;
export const showSiteTelePhone = (state) => state.generaldata.sitetelephone;
export const showSitePhone = (state) => state.generaldata.sitephone;
export const showSitePhone2 = (state) => state.generaldata.sitephone2;
export const showSiteAddress = (state) => state.generaldata.siteaddress;
export default generalSlice.reducer;
