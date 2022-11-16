// import styles from './index.module.css';
// import Image from 'next/image';
// import NavLink from '../../../components/NavLink';
// import IconComponent from '../../../components/iconComponent';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { forwardRef, useState } from 'react';
// import { Helmet } from 'react-helmet';
// import { showSiteName } from '../../../store/slices/generalSlice';
// import { useSelector } from 'react-redux';

// //create floating text input
// function TextInput({ type = 'text', label, name, onclick }) {
//   const [value, setValue] = useState('');

//   function handleChange(e) {
//     setValue(e.target.value);
//   }

//   return (
//     <div className={styles.coursesFormInput}>
//       <input
//         type={type}
//         value={value}
//         onChange={handleChange}
//         onClick={onclick}
//       />
//       <label className={value && styles.filled} htmlFor={name}>
//         {label}
//       </label>
//     </div>
//   );
// }
// //create floating select
// function SelectInput({ type = 'text', label, name, onclick }) {
//   const [value, setValue] = useState('');

//   function handleChange(e) {
//     setValue(e.target.value);
//   }

//   return (
//     <div className={styles.coursesFormInput}>
//       {/* <input
//         type={type}
//         value={value}
//         onChange={handleChange}
//         onClick={onclick}
//       /> */}
//       <select onClick={onclick} onChange={handleChange}>
//         <option selected value=''></option>
//         <option value='1'>asdasdasdasd</option>
//         <option value='2'>asdasdasdasd</option>
//         <option value='3'>asdasdasdasd</option>
//       </select>
//       <label className={value && styles.filled}>{label}</label>
//     </div>
//   );
// }
// //date picker custom input
// // eslint-disable-next-line react/display-name
// const FloatingDatePicker = forwardRef(
//   ({ value, onClick, name, label, type = 'text' }, ref) => (
//     <div className={styles.coursesFormInput}>
//       <input type={type} value={value} onClick={onClick} />
//       <label className={value && styles.filled} htmlFor={name}>
//         {label}
//       </label>
//     </div>
//   )
// );
// const Learning = () => {
//   //datepicker state:
//   const [startDate, setStartDate] = useState('');
//   const siteName = useSelector(showSiteName);
//   return (
//     <section>
//       <Helmet>
//         <meta charSet='utf-8' />
//         <title>{siteName} | Learning</title>
//       </Helmet>
//       <div id='pageCover' className={styles.pageCover}>
//         <Image
//           alt='page cover'
//           src='/img/learningcover.jpg'
//           layout='fill'
//           objectFit='cover'
//         />
//         {/* <div className={styles.coverTitle}>SERVES</div> */}
//       </div>
//       <div id='pageData' className={styles.pageData}>
//         <div id='pageDataIn' className={styles.pageDataIn}>
//           {/* <div className={styles.pageNavigator}>
//             <NavLink
//               href='/serves'
//               className={styles.navlink}
//               activeClassName={styles.navlink__active}
//               title='שירותים'
//             />
//             /
//             <NavLink
//               href='/products'
//               className={styles.navlink}
//               activeClassName={styles.navlink__active}
//               title='מוצרים'
//             />
//           </div> */}
//           <div className={styles.pageRealData}>
//             <div className={styles.contentParagraph_copy1}>
//               <div className={styles.contentMainTitle_copy}>
//                 <div className={styles.titleIconContainer}>
//                   {/* <IconComponent
//                     name='fa-sharp fa-solid fa-chalkboard-user'
//                     className={styles.titleIcon}
//                   /> */}
//                 </div>
//                 <h1>שירותים</h1>
//               </div>
//               <div className={styles.contentText}>
//                 <p>
//                   קורסים והדרכות מטעם QRS ובחסות האיגוד הישראלי לאיכות ביצוע
//                   הדרכות להרחבת הידע בתוך הארגון המאפשר לארגונים השונים להתעדכן
//                   בחוקים החדשים, תקנות ותקנים לתעשיית המכשור הרפואי ולרכוש הבנה
//                   עמוקה הן במישור האקדמי והן התעשייתי ביצוע הדרכות לעובדים
//                   המעורבים בפיתוח וייצור מוצרים, להגברת ההיכרות וההבנה של עבודה
//                   תחת מערכת איכות מול דרישות התקנים והתקינה ביצוע הדרכות כהכשרה
//                   לתחום הרגולציה, האיכות וביקורת איכות
//                 </p>
//               </div>
//             </div>
//             <div className={styles.contentParagraph_copy2}>
//               <div className={styles.coursesListTitle}>
//                 <h2>לרשימת הקורסים</h2>
//               </div>
//               <div className={styles.coursesListContainer}>
//                 <div className={styles.coursesListFormContainer}>
//                   <form>
//                     <div className={styles.coursesListFormFullRow}>
//                       <TextInput label='כתובת' name='address' />
//                     </div>
//                     <div className={styles.coursesListFormFullRow}>
//                       <div
//                         className={styles.coursesListFormHalfRow}
//                         style={{ paddingInlineEnd: '10px' }}
//                       >
//                         <DatePicker
//                           selected={startDate}
//                           onChange={(date) => setStartDate(date)}
//                           customInput={
//                             <FloatingDatePicker
//                               name='startdate'
//                               label='מתאריך'
//                             />
//                           }
//                           dateFormat='dd/MM/yyyy'
//                           // dateFormat='Pp'
//                         />
//                         {startDate ? (
//                           <div
//                             onClick={() => setStartDate('')}
//                             className={styles.datePickerClearIcon}
//                           >
//                             <IconComponent type='fab' name='fa-solid fa-x' />
//                           </div>
//                         ) : (
//                           ''
//                         )}
//                       </div>
//                       <div className={styles.coursesListFormHalfRow}>
//                         <div className={styles.coursesFormInput}>
//                           <SelectInput name='cat' label='בחר קטגוריה' />
//                         </div>
//                       </div>
//                       <div
//                         className={styles.coursesListFormHalfRow}
//                         style={{ flex: 0.7, marginInlineStart: '0.5vw' }}
//                       >
//                         <button
//                           type='button'
//                           className={styles.coursesFormButton}
//                         >
//                           חיפוש
//                         </button>
//                       </div>
//                     </div>
//                   </form>
//                 </div>
//                 <div className={styles.coursesList}>
//                   {/* item */}
//                   <div className={styles.courseItem}>
//                     <div className={styles.courseItemIn}>
//                       <div className={styles.courseItemInInside}>
//                         <div className={styles.courseItemInInsideImg}>
//                           <NavLink
//                             href='/products'
//                             className={styles.courseItemInInsideImg_link}
//                             activeClassName={styles.courseItemInInsideImg_link}
//                           >
//                             לפרטים
//                             <br />
//                             והרשמה
//                           </NavLink>
//                         </div>
//                         <div className={styles.courseItemInInsideText}>
//                           <NavLink
//                             href='/products'
//                             className={styles.courseItemInInsideText_link}
//                             activeClassName={styles.courseItemInInsideText_link}
//                           >
//                             הטקסט פה פהפהפה הטקסט פה פהפהפה הטקסט פה פהפהפה
//                             הטקסט פה פהפהפה הטקסט פה פהפהפה הטקסט פה פהפהפה
//                             הטקסט פה פהפהפה הטקסט פה פהפהפה הטקסט פה פהפהפה
//                           </NavLink>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   {/* /item */}
//                   {/* item */}
//                   <div className={styles.courseItem}>
//                     <div className={styles.courseItemIn2}>
//                       <div className={styles.courseItemInInside2}>
//                         <div className={styles.courseItemInInside2Text}>
//                           <NavLink
//                             href='/products'
//                             className={styles.courseItemInInsideText_link}
//                             activeClassName={styles.courseItemInInsideText_link}
//                           >
//                             הטקסט פה פהפהפה הטקסט פה פהפהפה הטקסט פה פהפהפה
//                             הטקסט פה פהפהפה הטקסט פה פהפהפה הטקסט פה פהפהפה
//                             הטקסט פה פהפהפה הטקסט פה פהפהפה הטקסט פה פהפהפה
//                           </NavLink>
//                         </div>
//                         <div className={styles.courseItemInInside2Img}>
//                           <NavLink
//                             href='/products'
//                             className={styles.courseItemInInsideImg_link}
//                             activeClassName={styles.courseItemInInsideImg_link}
//                           >
//                             לפרטים
//                             <br />
//                             והרשמה
//                           </NavLink>
//                         </div>
//                       </div>
//                     </div>
//                     <div className={styles.courseItemCircle}></div>
//                   </div>
//                   {/* /item */}
//                   {/* item */}
//                   <div className={styles.courseItem}>
//                     <div className={styles.courseItemIn}>
//                       <div className={styles.courseItemInInside}>
//                         <div className={styles.courseItemInInsideImg}>
//                           <NavLink
//                             href='/products'
//                             className={styles.courseItemInInsideImg_link}
//                             activeClassName={styles.courseItemInInsideImg_link}
//                           >
//                             לפרטים
//                             <br />
//                             והרשמה
//                           </NavLink>
//                         </div>
//                         <div className={styles.courseItemInInsideText}>
//                           <NavLink
//                             href='/products'
//                             className={styles.courseItemInInsideText_link}
//                             activeClassName={styles.courseItemInInsideText_link}
//                           >
//                             הטקסט פה פהפהפה הטקסט פה פהפהפה הטקסט פה פהפהפה
//                             הטקסט פה פהפהפה הטקסט פה פהפהפה הטקסט פה פהפהפה
//                             הטקסט פה פהפהפה הטקסט פה פהפהפה הטקסט פה פהפהפה
//                           </NavLink>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   {/* /item */}
//                   {/* item */}
//                   <div className={styles.courseItem}>
//                     <div className={styles.courseItemIn2}>
//                       <div className={styles.courseItemInInside2}>
//                         <div className={styles.courseItemInInside2Text}>
//                           <NavLink
//                             href='/products'
//                             className={styles.courseItemInInsideText_link}
//                             activeClassName={styles.courseItemInInsideText_link}
//                           >
//                             הטקסט פה פהפהפה הטקסט פה פהפהפה הטקסט פה פהפהפה
//                             הטקסט פה פהפהפה הטקסט פה פהפהפה הטקסט פה פהפהפה
//                             הטקסט פה פהפהפה הטקסט פה פהפהפה הטקסט פה פהפהפה
//                           </NavLink>
//                         </div>
//                         <div className={styles.courseItemInInside2Img}>
//                           <NavLink
//                             href='/products'
//                             className={styles.courseItemInInsideImg_link}
//                             activeClassName={styles.courseItemInInsideImg_link}
//                           >
//                             לפרטים
//                             <br />
//                             והרשמה
//                           </NavLink>
//                         </div>
//                       </div>
//                     </div>
//                     <div className={styles.courseItemCircle}></div>
//                   </div>
//                   {/* /item */}
//                   {/* item */}
//                   <div className={styles.courseItem}>
//                     <div className={styles.courseItemIn}>
//                       <div className={styles.courseItemInInside}>
//                         <div className={styles.courseItemInInsideImg}>
//                           <NavLink
//                             href='/products'
//                             className={styles.courseItemInInsideImg_link}
//                             activeClassName={styles.courseItemInInsideImg_link}
//                           >
//                             לפרטים
//                             <br />
//                             והרשמה
//                           </NavLink>
//                         </div>
//                         <div className={styles.courseItemInInsideText}>
//                           <NavLink
//                             href='/products'
//                             className={styles.courseItemInInsideText_link}
//                             activeClassName={styles.courseItemInInsideText_link}
//                           >
//                             הטקסט פה פהפהפה הטקסט פה פהפהפה הטקסט פה פהפהפה
//                             הטקסט פה פהפהפה הטקסט פה פהפהפה הטקסט פה פהפהפה
//                             הטקסט פה פהפהפה הטקסט פה פהפהפה הטקסט פה פהפהפה
//                           </NavLink>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   {/* /item */}
//                   {/* item */}
//                   <div className={styles.courseItem}>
//                     <div className={styles.courseItemIn2}>
//                       <div className={styles.courseItemInInside2}>
//                         <div className={styles.courseItemInInside2Text}>
//                           <NavLink
//                             href='/products'
//                             className={styles.courseItemInInsideText_link}
//                             activeClassName={styles.courseItemInInsideText_link}
//                           >
//                             הטקסט פה פהפהפה הטקסט פה פהפהפה הטקסט פה פהפהפה
//                             הטקסט פה פהפהפה הטקסט פה פהפהפה הטקסט פה פהפהפה
//                             הטקסט פה פהפהפה הטקסט פה פהפהפה הטקסט פה פהפהפה
//                           </NavLink>
//                         </div>
//                         <div className={styles.courseItemInInside2Img}>
//                           <NavLink
//                             href='/products'
//                             className={styles.courseItemInInsideImg_link}
//                             activeClassName={styles.courseItemInInsideImg_link}
//                           >
//                             לפרטים
//                             <br />
//                             והרשמה
//                           </NavLink>
//                         </div>
//                       </div>
//                     </div>
//                     <div className={styles.courseItemCircle}></div>
//                   </div>
//                   {/* /item */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// // Learning.title = 'Learning';
// export default Learning;
