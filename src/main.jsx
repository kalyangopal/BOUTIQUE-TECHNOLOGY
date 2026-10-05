import React, {useMemo, useState} from 'react';
import {createRoot} from 'react-dom/client';
import {motion, AnimatePresence} from 'framer-motion';
import {LayoutDashboard, Shirt, Sparkles, Package, Settings, LogOut, Search, Bell, Plus, ArrowRight, Play, Layers3, Box, ChevronRight, Menu, X, CheckCircle2, Clock3, Image as ImageIcon, Upload, Eye, BarChart3} from 'lucide-react';
import './styles.css';

const images={
 hero:'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1800&q=90',
 saree1:'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1800&q=90',
 saree2:'https://images.unsplash.com/photo-1776504768745-551029df100d?auto=format&fit=crop&w=1800&q=90',
 salwar1:'https://images.unsplash.com/photo-1743229995437-aec83fb0d4ce?auto=format&fit=crop&w=1800&q=90',
 salwar2:'https://images.unsplash.com/photo-1632826727346-43a7ac6bcb1b?auto=format&fit=crop&w=1800&q=90',
 salwar3:'https://images.unsplash.com/photo-1552109871-72a6d9bc2c56?auto=format&fit=crop&w=1800&q=90',
 lehenga1:'https://images.unsplash.com/photo-1754641585246-5f2f2b5560d2?auto=format&fit=crop&w=1800&q=90',
 lehenga2:'https://images.unsplash.com/photo-1756483529948-e0cf68c16e18?auto=format&fit=crop&w=1800&q=90',
 anarkali1:'https://images.unsplash.com/photo-1525373761544-a828e4bb1674?auto=format&fit=crop&w=1800&q=90',
 anarkali2:'https://images.unsplash.com/photo-1652374968229-a66a1c170c04?auto=format&fit=crop&w=1800&q=90',
 saree3:'https://images.unsplash.com/photo-1769275060568-dce331bc222c?auto=format&fit=crop&w=1800&q=90',
 saree4:'https://images.unsplash.com/photo-1778148046511-27141f5f01ae?auto=format&fit=crop&w=1800&q=90'
};
const products=[
 {id:1,name:'Royal Silk Drape',cat:'Saree + Blouse',price:'₹18,900',stock:18,image:images.saree1,tag:'Signature'},
 {id:2,name:'Ivory Heritage Set',cat:'Salwar Kameez',price:'₹12,500',stock:24,image:images.salwar1,tag:'New'},
 {id:3,name:'Maharani Bridal Lehenga',cat:'Lehenga',price:'₹32,900',stock:9,image:images.lehenga1,tag:'Premium'},
 {id:4,name:'Rose Gold Anarkali',cat:'Anarkali Suit',price:'₹16,400',stock:14,image:images.anarkali1,tag:'Featured'},
 {id:5,name:'Ruby Evening Saree',cat:'Saree + Blouse',price:'₹21,200',stock:11,image:images.saree2,tag:'New'},
 {id:6,name:'Pearl Garden Suit',cat:'Salwar Kameez',price:'₹14,800',stock:17,image:images.salwar2,tag:'Signature'},
 {id:7,name:'Teal Heritage Suit',cat:'Salwar Kameez',price:'₹15,900',stock:8,image:images.salwar3,tag:'Limited'},
 {id:8,name:'Royal Pink Lehenga',cat:'Lehenga',price:'₹29,800',stock:12,image:images.lehenga2,tag:'Premium'},
 {id:9,name:'Sunlit Anarkali',cat:'Anarkali Suit',price:'₹17,600',stock:16,image:images.anarkali2,tag:'New'},
 {id:10,name:'Emerald Draped Silk',cat:'Saree + Blouse',price:'₹24,500',stock:6,image:images.saree3,tag:'Limited'},
 {id:11,name:'Garden Silk Saree',cat:'Saree + Blouse',price:'₹19,700',stock:13,image:images.saree4,tag:'Featured'},
 {id:12,name:'Ceremonial Pink Edit',cat:'Anarkali Suit',price:'₹22,400',stock:10,image:images.hero,tag:'Editorial'}
];
const cats=['All','Saree + Blouse','Salwar Kameez','Lehenga','Anarkali Suit'];

function App(){
 const [page,setPage]=useState('dashboard'); const [cat,setCat]=useState('All'); const [selected,setSelected]=useState(null); const [mobile,setMobile]=useState(false); const [showAdd,setShowAdd]=useState(false); const [toast,setToast]=useState('');
 const filtered=useMemo(()=>cat==='All'?products:products.filter(p=>p.cat===cat),[cat]);
 const notify=(t)=>{setToast(t);setTimeout(()=>setToast(''),2600)};
 const nav=[['dashboard','Dashboard',LayoutDashboard],['catalog','Collections',Shirt],['tryon','Virtual Try-On',Sparkles],['inventory','Inventory',Package]];
 return <div className="app">
  <aside className={'sidebar '+(mobile?'open':'')}>
   <div className="brand"><div className="brand-mark">A</div><div><b>AURA</b><span>BOUTIQUE TECHNOLOGY</span></div><button className="close" onClick={()=>setMobile(false)}><X size={18}/></button></div>
   <div className="nav-label">WORKSPACE</div>
   {nav.map(([id,label,Icon])=><button key={id} className={'nav-item '+(page===id?'active':'')} onClick={()=>{setPage(id);setMobile(false)}}><Icon size={19}/><span>{label}</span>{id==='tryon'&&<i>LIVE</i>}</button>)}
   <div className="nav-label lower">SYSTEM</div><button className="nav-item" onClick={()=>notify('Settings are ready for the next configuration phase.')}><Settings size={19}/><span>Settings</span></button>
   <div className="sidebar-bottom"><div className="profile"><div className="avatar">AD</div><div><b>Admin Studio</b><span>Premium workspace</span></div></div><button className="logout" onClick={()=>notify('Demo logout action triggered.')}><LogOut size={18}/></button></div>
  </aside>
  {mobile&&<div className="overlay" onClick={()=>setMobile(false)}/>} 
  <main className="main">
   <header className="topbar"><button className="mobile-menu" onClick={()=>setMobile(true)}><Menu/></button><div className="crumb">AURA / <b>{page==='dashboard'?'Overview':page==='catalog'?'Collections':page==='tryon'?'Virtual Try-On':'Inventory'}</b></div><div className="top-actions"><div className="search"><Search size={17}/><input placeholder="Search collection..."/></div><button className="icon-btn"><Bell size={18}/><span/></button><div className="mini-avatar">AD</div></div></header>
   <div className="content">
    {page==='dashboard'&&<Dashboard setPage={setPage} products={products} setSelected={setSelected} setShowAdd={setShowAdd}/>} 
    {page==='catalog'&&<Catalog filtered={filtered} cat={cat} setCat={setCat} setSelected={setSelected} setShowAdd={setShowAdd}/>} 
    {page==='tryon'&&<TryOn products={products} selected={selected} setSelected={setSelected} notify={notify}/>} 
    {page==='inventory'&&<Inventory products={products} setShowAdd={setShowAdd}/>} 
   </div>
  </main>
  <AnimatePresence>{selected&&<TryModal product={selected} close={()=>setSelected(null)} notify={notify}/>}</AnimatePresence>
  <AnimatePresence>{showAdd&&<AddModal close={()=>setShowAdd(false)} notify={notify}/>}</AnimatePresence>
  <AnimatePresence>{toast&&<motion.div initial={{y:30,opacity:0}} animate={{y:0,opacity:1}} exit={{y:20,opacity:0}} className="toast"><CheckCircle2 size={18}/>{toast}</motion.div>}</AnimatePresence>
 </div>
}

function Dashboard({setPage,products,setSelected,setShowAdd}){return <>
 <section className="hero"><div><div className="eyebrow"><Sparkles size={14}/> PREMIUM BOUTIQUE INTELLIGENCE</div><h1>Turn every outfit<br/><em>into an experience.</em></h1><p>Manage your collection, guide customers through virtual styling, and prepare the next generation of 3D visualization.</p><div className="hero-actions"><button className="primary" onClick={()=>setPage('tryon')}>Open Virtual Try-On <ArrowRight size={17}/></button><button className="ghost" onClick={()=>setShowAdd(true)}><Plus size={17}/> Add Product</button></div></div><div className="hero-visual"><img src={images.hero}/><div className="floating-card"><span>TRY-ON STUDIO</span><b>Ready for styling</b><div className="progress"><i/></div></div></div></section>
 <div className="stats"><Stat icon={Package} label="Total Products" value="128" change="+12 this month"/><Stat icon={Sparkles} label="Online Try-Ons" value="2,846" change="+18.6% this week"/><Stat icon={BarChart3} label="Styling Sessions" value="684" change="Live today"/><Stat icon={Layers3} label="Low Stock Items" value="07" change="Needs attention" warn/></div>
 <section className="section-head"><div><span className="eyebrow">COLLECTIONS</span><h2>Explore the wardrobe</h2></div><button className="text-btn" onClick={()=>setPage('catalog')}>View all <ChevronRight size={16}/></button></section>
 <div className="category-grid">{[['Saree + Blouse',images.saree1,'24 styles'],['Salwar Kameez',images.salwar1,'31 styles'],['Lehenga',images.lehenga1,'18 styles'],['Anarkali Suit',images.anarkali1,'27 styles']].map(([name,img,count],i)=><motion.button whileHover={{y:-6}} className="category-card" key={name} onClick={()=>setPage('catalog')}><img src={img}/><div className="cat-shade"/><div className="cat-info"><span>0{i+1}</span><h3>{name}</h3><p>{count}</p></div><ArrowRight className="cat-arrow" size={19}/></motion.button>)}</div>
 <section className="section-head recent"><div><span className="eyebrow">LATEST EDIT</span><h2>Featured pieces</h2></div><button className="text-btn" onClick={()=>setPage('catalog')}>Browse collection <ChevronRight size={16}/></button></section>
 <div className="product-strip">{products.slice(0,4).map(p=><ProductCard key={p.id} p={p} setSelected={setSelected}/>)}</div>
 <section className="dashboard-bottom">
  <div className="activity-panel"><div className="panel-heading"><div><span className="eyebrow">LIVE ACTIVITY</span><h2>Styling floor</h2></div><span className="live-chip"><i/> Live now</span></div>
   <div className="activity-list"><Activity icon={Sparkles} title="New try-on session" detail="Rose Gold Anarkali · Studio 02" time="Just now"/><Activity icon={Eye} title="Collection preview" detail="Maharani Bridal Lehenga" time="2 min ago"/><Activity icon={Package} title="Stock update" detail="7 items need attention" time="8 min ago"/></div>
  </div>
  <div className="roadmap-panel"><span className="eyebrow">PRODUCT ROADMAP</span><h2>From 2D styling to 3D.</h2><p>The current demo proves the premium visual workflow. The next module introduces depth, drape and interactive garment visualization.</p><div className="roadmap-progress"><span><i/></span><b>2D Studio</b><small>Ready</small><span className="future"><i/></span><b>3D Visualization</b><small>Next</small></div></div>
 </section>
 </>}
function Activity({icon:Icon,title,detail,time}){return <div className="activity-item"><div className="activity-icon"><Icon size={16}/></div><div><b>{title}</b><span>{detail}</span></div><time>{time}</time></div>}
function Stat({icon:Icon,label,value,change,warn}){return <motion.div className="stat" whileHover={{y:-3}}><div className={'stat-icon '+(warn?'warn':'')}><Icon size={20}/></div><div><span>{label}</span><strong>{value}</strong><small className={warn?'warning':''}>{change}</small></div></motion.div>}
function Catalog({filtered,cat,setCat,setSelected,setShowAdd}){return <><PageTitle kicker="CURATED COLLECTION" title="Your wardrobe, beautifully organized." desc="Explore premium garment assets prepared for the boutique's interactive styling experience." action={<button className="primary" onClick={()=>setShowAdd(true)}><Plus size={17}/> Add Product</button>}/><div className="filters">{cats.map(c=><button className={cat===c?'selected':''} onClick={()=>setCat(c)} key={c}>{c}</button>)}<div className="filter-search"><Search size={16}/> Search products</div></div><div className="catalog-grid">{filtered.map(p=><ProductCard key={p.id} p={p} setSelected={setSelected}/>)}</div></>}
function ProductCard({p,setSelected}){return <motion.article className="product-card" whileHover={{y:-5}}><div className="product-img"><img src={p.image}/><span>{p.tag}</span><button onClick={()=>setSelected(p)}><Eye size={16}/> Preview</button></div><div className="product-info"><div><span>{p.cat}</span><h3>{p.name}</h3></div><b>{p.price}</b></div><div className="product-meta"><span><Package size={14}/> {p.stock} in stock</span><span className="ready"><CheckCircle2 size={14}/> Try-on ready</span></div></motion.article>}
function TryOn({products,selected,setSelected,notify}){return <><PageTitle kicker="INTERACTIVE STUDIO" title="Virtual styling, without the camera." desc="Select a model and garment to create a premium 2D visualization. Camera access is not required in this demo."/><div className="studio"><div className="model-stage"><div className="stage-top"><span><span className="live-dot"/> LIVE PREVIEW</span><span>2D VISUALIZATION</span></div><img src={(selected||products[0]).image}/><div className="model-overlay"><div><span>SELECTED GARMENT</span><b>{(selected||products[0]).name}</b></div><div className="stage-next"><Box size={18}/><div><span>NEXT STEP</span><b>3D Visualization</b><small>Interactive garment depth &amp; drape</small></div><span className="soon">COMING NEXT</span></div></div></div><div className="studio-panel"><div className="panel-title"><span>STYLE BUILDER</span><Sparkles size={18}/></div><label>1. Choose garment</label><div className="garment-list">{products.slice(0,4).map(p=><button className={selected?.id===p.id?'chosen':''} onClick={()=>setSelected(p)} key={p.id}><img src={p.image}/><span><b>{p.name}</b><small>{p.cat}</small></span><ChevronRight size={16}/></button>)}</div><button className="primary full" onClick={()=>notify('2D styling preview generated. 3D visualization is the next module.')}>Generate Preview <Sparkles size={16}/></button><div className="pipeline"><div className="done"><CheckCircle2 size={17}/><span>Image styling</span></div><div className="line"/><div><Box size={17}/><span>3D visualization</span><i>Next</i></div></div></div></div></>}
function Inventory({products,setShowAdd}){return <><PageTitle kicker="STOCK CONTROL" title="Inventory at a glance." desc="Keep every boutique collection presentation-ready with a simple stock workspace." action={<button className="primary" onClick={()=>setShowAdd(true)}><Plus size={17}/> Add Product</button>}/><div className="inventory-cards"><Stat icon={Package} label="Total SKUs" value="128" change="Across 4 categories"/><Stat icon={CheckCircle2} label="Healthy Stock" value="121" change="94.5% of catalog"/><Stat icon={Clock3} label="Low Stock" value="07" change="Review soon" warn/></div><div className="table-wrap"><div className="table-head"><h3>Product inventory</h3><div><Search size={16}/> Filter inventory</div></div><table><thead><tr><th>Product</th><th>Category</th><th>Price</th><th>Stock</th><th>Status</th></tr></thead><tbody>{products.map(p=><tr key={p.id}><td><div className="table-product"><img src={p.image}/><b>{p.name}</b></div></td><td>{p.cat}</td><td>{p.price}</td><td>{p.stock}</td><td><span className={'status '+(p.stock<10?'low':'')}>{p.stock<10?'Low stock':'In stock'}</span></td></tr>)}</tbody></table></div></>}
function PageTitle({kicker,title,desc,action}){return <div className="page-title"><div><span className="eyebrow">{kicker}</span><h1>{title}</h1><p>{desc}</p></div>{action}</div>}
function TryModal({product,close,notify}){return <motion.div className="modal-back" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={close}><motion.div className="try-modal" initial={{y:30,scale:.97}} animate={{y:0,scale:1}} exit={{y:20}} onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={close}><X/></button><div className="modal-image"><img src={product.image}/><div className="three-badge"><Box size={17}/><span>3D visualization<br/><b>Coming next</b></span></div></div><div className="modal-copy"><span className="eyebrow">TRY-ON PREVIEW</span><h2>{product.name}</h2><p>{product.cat} · {product.price}</p><div className="demo-note"><Sparkles size={18}/><div><b>2D preview ready</b><span>The current client demo focuses on high-fidelity visual styling. Interactive 3D garment visualization is planned as the next stage.</span></div></div><button className="primary full" onClick={()=>notify('Preview session started for '+product.name)}>Start Styling Session <ArrowRight size={16}/></button></div></motion.div></motion.div>}
function AddModal({close,notify}){return <motion.div className="modal-back" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={close}><motion.div className="add-modal" initial={{y:30}} animate={{y:0}} exit={{y:20}} onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={close}><X/></button><span className="eyebrow">PRODUCT MANAGEMENT</span><h2>Add a new piece</h2><p>Demo form — database connection is intentionally disabled for this first client presentation.</p><div className="upload"><Upload size={22}/><b>Upload ultra-HD product image</b><span>PNG / JPG · up to 10 MB</span></div><div className="form-grid"><input placeholder="Product name"/><select defaultValue=""><option value="" disabled>Category</option><option>Saree + Blouse</option><option>Salwar Kameez</option><option>Lehenga</option><option>Anarkali Suit</option></select><input placeholder="Price"/><input placeholder="Stock quantity"/></div><button className="primary full" onClick={()=>{close();notify('Product saved to demo workspace. No database write was made.')}}>Save Demo Product <CheckCircle2 size={16}/></button></motion.div></motion.div>}

createRoot(document.getElementById('root')).render(<App/>);
