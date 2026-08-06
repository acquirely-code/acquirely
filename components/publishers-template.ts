// Generated from the approved publishers design. The route no longer reads an HTML file.
export const publishersTemplate = String.raw`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Acquirely | Growth System for Book Publishers</title>
<meta name="description" content="Stop selling books one school visit at a time. Get school decision-makers to book calls with you — right when they choose next year's curriculum." />
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@500;600;700;800&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" rel="stylesheet">
<style>
  :root{
    --navy:#0A2542;--navy-2:#0E2E52;--navy-3:#123566;
    --peri:#7C93D9;--peri-soft:#A9B9E6;
    --gold:#E2A72C;--gold-ink:#C8891B;
    --cream:#F4F1E9;--cream-2:#EAE6DA;
    --ink:#17263F;--muted:#5D6B82;--line:#DAD5C6;--white:#FFF;
    --serif:"Fraunces",Georgia,serif;--sans:"Hanken Grotesk",system-ui,sans-serif;
    --shadow:0 18px 50px -20px rgba(10,37,66,.28);
    --shadow-sm:0 10px 26px -16px rgba(10,37,66,.34);
  }
  *{box-sizing:border-box;margin:0;padding:0}
  html{scroll-behavior:smooth}
  body{font-family:var(--sans);color:var(--ink);background:var(--cream);line-height:1.55;-webkit-font-smoothing:antialiased}
  a{color:inherit;text-decoration:none}
  svg{display:block}
  .wrap{width:min(1080px,92vw);margin-inline:auto}

  .eyebrow{font-weight:800;font-size:.72rem;letter-spacing:.22em;text-transform:uppercase;color:var(--gold-ink)}
  .eyebrow.d{color:var(--peri)}
  h1,h2,h3{font-family:var(--serif);font-weight:600;line-height:1.04;letter-spacing:-.015em}
  h2{font-size:clamp(2rem,4.8vw,3.2rem);color:var(--navy);margin:.55rem 0}
  section.dark h2{color:#fff}

  .btn{display:inline-flex;align-items:center;gap:.55rem;font-weight:800;font-size:1rem;background:var(--gold);color:#20160A;
    padding:.95rem 1.7rem;border-radius:999px;border:0;cursor:pointer;transition:transform .18s,box-shadow .18s,background .18s;box-shadow:0 10px 26px -12px rgba(226,167,44,.75)}
  .btn:hover{transform:translateY(-2px);background:#EEB53F}
  .btn .arw{transition:transform .18s}.btn:hover .arw{transform:translateX(3px)}

  header.nav{position:sticky;top:0;z-index:50;background:rgba(10,37,66,.9);backdrop-filter:blur(10px);border-bottom:1px solid rgba(124,147,217,.18)}
  .nav-in{display:flex;align-items:center;justify-content:space-between;padding:.75rem 0}
  .brand{font-weight:800;font-size:1.4rem;color:#fff;letter-spacing:-.02em}.brand .dot{color:var(--gold)}
  .nav .btn{padding:.6rem 1.15rem;font-size:.9rem}

  section{padding:clamp(3.2rem,6.5vw,5.5rem) 0}
  section.dark{background:var(--navy);color:#fff}
  section.cream-2{background:linear-gradient(180deg,var(--cream),var(--cream-2))}
  .center{text-align:center;max-width:760px;margin-inline:auto}

  /* hero */
  .hero{background:radial-gradient(1100px 520px at 80% -10%,rgba(124,147,217,.2),transparent 60%),var(--navy);color:#fff;overflow:hidden}
  .hero-grid{display:grid;grid-template-columns:1.15fr .85fr;gap:2.6rem;align-items:center}
  .hero h1{font-size:clamp(2.4rem,5.6vw,4.1rem);margin:1rem 0 1rem}
  .hero h1 em{font-style:italic;color:var(--gold)}
  .hero .sub{font-size:clamp(1.05rem,1.9vw,1.2rem);color:var(--peri-soft);max-width:32rem}
  .hero .cta-row{margin:1.7rem 0 .6rem}
  .hero .urg{font-size:.9rem;color:var(--peri-soft);font-style:italic}.hero .urg b{color:var(--gold);font-style:normal}
  .trust{display:flex;gap:2.2rem;margin-top:1.8rem;padding-top:1.5rem;border-top:1px solid rgba(124,147,217,.22);flex-wrap:wrap}
  .trust .n{font-family:var(--serif);font-size:1.5rem;font-weight:600;color:#fff;line-height:1}
  .trust .l{font-size:.75rem;color:var(--peri-soft);margin-top:.25rem}
  .seal-wrap{display:flex;justify-content:center}
  .seal{width:min(300px,66vw);filter:drop-shadow(0 20px 40px rgba(0,0,0,.35));animation:sealIn 1s cubic-bezier(.2,.7,.2,1) both}
  .seal .spin{transform-origin:150px 150px;animation:spin 46s linear infinite}
  @keyframes sealIn{from{opacity:0;transform:scale(.7) rotate(-14deg)}to{opacity:1;transform:scale(1) rotate(-7deg)}}
  @keyframes spin{to{transform:rotate(360deg)}}
  @media(max-width:840px){.hero-grid{grid-template-columns:1fr;gap:1.6rem}.seal-wrap{order:-1}.seal{width:190px}}

  /* waste bar */
  .waste{display:grid;grid-template-columns:.85fr 1.15fr;gap:2.4rem;align-items:center;margin-top:1.5rem}
  .waste .big{font-family:var(--serif);font-size:clamp(4rem,11vw,7rem);font-weight:700;color:var(--navy);line-height:.9}
  .waste .big span{color:var(--gold-ink)}
  .waste .cap{font-size:1.05rem;color:var(--muted);margin-top:.4rem;max-width:26ch}
  .bar{height:64px;border-radius:14px;overflow:hidden;display:flex;box-shadow:var(--shadow-sm)}
  .bar .lost{flex:0 0 80%;background:repeating-linear-gradient(135deg,#33415c,#33415c 9px,#3b4a66 9px,#3b4a66 18px);display:flex;align-items:center;justify-content:center;color:#cdd6ea;font-weight:700;font-size:.85rem;letter-spacing:.02em}
  .bar .kept{flex:1;background:var(--gold);display:flex;align-items:center;justify-content:center;color:#20160A;font-weight:800;font-size:.8rem}
  .bar-labels{display:flex;justify-content:space-between;margin-top:.6rem;font-size:.8rem;color:var(--muted);font-weight:600}
  @media(max-width:760px){.waste{grid-template-columns:1fr;gap:1.2rem;text-align:center}.waste .cap{margin-inline:auto}}

  /* contrast pairs */
  .pairs{display:flex;flex-direction:column;gap:.7rem;margin-top:2rem;max-width:720px}
  .pair{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:1rem;background:rgba(255,255,255,.05);border:1px solid rgba(124,147,217,.2);border-radius:14px;padding:.9rem 1.2rem}
  .pair .old{color:var(--peri-soft);font-weight:600;text-align:right;font-size:1rem}
  .pair .new{color:#fff;font-weight:700;font-size:1.02rem}
  .pair .ar{color:var(--gold);font-size:1.2rem;font-weight:800}
  @media(max-width:620px){.pair{grid-template-columns:1fr;text-align:center;gap:.15rem}.pair .old{text-align:center}.pair .ar{transform:rotate(90deg)}}

  /* flow */
  .flow{display:flex;align-items:stretch;justify-content:space-between;gap:.5rem;margin-top:2.4rem}
  .node{flex:1;text-align:center;padding:.4rem}
  .node .ic{width:58px;height:58px;margin:0 auto .8rem;border-radius:50%;background:#fff;border:1.5px solid var(--line);display:grid;place-items:center;box-shadow:var(--shadow-sm)}
  .node .ic svg{width:28px;height:28px}
  .node h3{font-size:1.02rem;color:var(--navy);margin-bottom:.25rem}
  .node p{font-size:.86rem;color:var(--muted);line-height:1.35}
  .flow .arw{align-self:center;color:var(--gold);font-size:1.3rem;font-weight:800;flex:0 0 auto}
  .flow-note{text-align:center;margin-top:1.8rem;font-size:1.02rem;color:var(--navy);font-weight:600}
  @media(max-width:820px){.flow{flex-direction:column;gap:0}.flow .arw{transform:rotate(90deg);padding:.35rem 0}
    .node{display:flex;text-align:left;align-items:center;gap:1rem;padding:.5rem 0}.node .ic{margin:0}}

  /* timeline */
  .tl{margin-top:2.2rem;background:rgba(255,255,255,.04);border:1px solid rgba(124,147,217,.22);border-radius:18px;padding:1.4rem}
  .tl svg{width:100%;height:auto}
  .tl-note{text-align:center;margin-top:1.3rem;color:var(--peri-soft);font-size:1rem}.tl-note b{color:var(--gold)}

  /* proof */
  .cms{background:linear-gradient(135deg,var(--navy),var(--navy-3));border:1.5px solid var(--gold);border-radius:22px;padding:clamp(1.8rem,4vw,2.8rem);display:grid;grid-template-columns:auto 1fr;gap:2rem;align-items:center;box-shadow:0 26px 64px -30px rgba(226,167,44,.5)}
  .cms .num{font-family:var(--serif);font-size:clamp(3.4rem,9vw,5.5rem);font-weight:700;color:var(--gold);line-height:.85}
  .cms .num small{display:block;font-size:.9rem;font-family:var(--sans);font-weight:700;color:var(--peri-soft);letter-spacing:.14em;text-transform:uppercase;margin-top:.5rem}
  .cms h3{color:#fff;font-size:1.35rem;margin-bottom:.4rem}
  .cms p{color:#d7deee;font-size:1rem}
  @media(max-width:680px){.cms{grid-template-columns:1fr;gap:1rem;text-align:center}}
  .statband{display:grid;grid-template-columns:repeat(4,1fr);gap:1rem;margin-top:1.4rem}
  .stat{background:rgba(255,255,255,.04);border:1px solid rgba(124,147,217,.2);border-radius:14px;padding:1.2rem;text-align:center}
  .stat .n{font-family:var(--serif);font-size:1.7rem;font-weight:600;color:var(--gold)}
  .stat .l{font-size:.78rem;color:var(--peri-soft);margin-top:.2rem}
  .honest{margin-top:1.6rem;text-align:center;font-size:.95rem;color:var(--peri-soft);font-style:italic}.honest b{color:#fff;font-style:normal}
  @media(max-width:680px){.statband{grid-template-columns:1fr 1fr}}

  /* pricing */
  .price-grid{display:grid;grid-template-columns:1fr 1fr;gap:1.4rem;margin-top:2.2rem;align-items:start}
  .price{background:linear-gradient(180deg,var(--navy-2),var(--navy));border:1px solid rgba(124,147,217,.25);border-radius:20px;padding:1.9rem 1.7rem;position:relative}
  .price.feat{border:1.5px solid var(--gold);box-shadow:0 24px 60px -28px rgba(226,167,44,.55)}
  .price .badge{position:absolute;top:-13px;left:1.7rem;background:var(--gold);color:#20160A;font-size:.68rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;padding:.34rem .85rem;border-radius:999px}
  .price .plan{font-size:.78rem;letter-spacing:.05em;color:var(--peri-soft);text-transform:uppercase;font-weight:800}
  .price .amt{font-family:var(--serif);font-size:2.7rem;color:#fff;line-height:1;margin:.45rem 0 .15rem}
  .price .amt .anchor{font-size:1.3rem;text-decoration:line-through;text-decoration-color:rgba(169,185,230,.55);color:var(--peri-soft);margin-right:.45rem}
  .price .amt .gst{font-size:1rem;color:var(--peri-soft)}
  .price .freebie{display:inline-block;background:var(--gold);color:#20160A;font-weight:800;font-size:.8rem;padding:.32rem .75rem;border-radius:999px;margin:.5rem 0 .3rem}
  .price .sub{font-size:.9rem;color:var(--peri-soft);margin-bottom:.7rem}
  .price .pay{font-size:.82rem;color:#cdd6ea;background:rgba(124,147,217,.1);border-radius:10px;padding:.55rem .7rem;margin:.2rem 0 .8rem}
  .price ul{list-style:none;display:flex;flex-direction:column;gap:.45rem}
  .price li{display:flex;gap:.5rem;color:#d7deee;font-size:.9rem}
  .mk{flex:0 0 auto;width:18px;height:18px;border-radius:50%;display:grid;place-items:center;font-size:.62rem;font-weight:800;margin-top:.15rem;background:var(--gold);color:#20160A}
  .mk.x{background:#F1D9D3;color:#B23A2E}
  .sixmo{margin-top:1.15rem;text-align:center;color:var(--peri-soft);font-size:.92rem}.sixmo b{color:#fff}
  .twoline{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:1.6rem}
  .minibox{background:rgba(226,167,44,.1);border:1px solid rgba(226,167,44,.32);border-radius:14px;padding:1.1rem 1.3rem}
  .minibox .k{font-family:var(--serif);font-size:1.05rem;color:#fff;margin-bottom:.2rem}
  .minibox p{font-size:.9rem;color:#dbe2f1}.minibox b{color:var(--gold)}
  @media(max-width:760px){.price-grid,.twoline{grid-template-columns:1fr}}

  /* guarantee */
  .risk{background:var(--navy);color:#fff;border-radius:22px;padding:clamp(2rem,4vw,2.8rem);text-align:center;box-shadow:var(--shadow)}
  .risk h2{color:#fff;max-width:24ch;margin:.4rem auto .5rem}
  .risk .rl{color:var(--peri-soft);max-width:52ch;margin:0 auto 1.5rem}
  .risk-cards{display:grid;grid-template-columns:1fr 1fr;gap:1rem;max-width:720px;margin:0 auto;text-align:left}
  .risk-cards .rc{background:rgba(124,147,217,.1);border:1px solid rgba(124,147,217,.25);border-radius:14px;padding:1rem 1.2rem;font-size:.96rem;display:flex;gap:.6rem}
  @media(max-width:600px){.risk-cards{grid-template-columns:1fr}}

  /* fit */
  .fit{display:grid;grid-template-columns:1fr 1fr;gap:1.4rem;margin-top:2rem}
  .fit .box{border-radius:18px;padding:1.6rem}
  .fit .yes{background:linear-gradient(180deg,var(--navy-2),var(--navy));border:1px solid rgba(226,167,44,.35)}
  .fit .no{background:rgba(255,255,255,.04);border:1px solid rgba(124,147,217,.2)}
  .fit h3{font-size:1.1rem;margin-bottom:.9rem}.fit .yes h3{color:var(--gold)}.fit .no h3{color:var(--peri-soft)}
  .fit ul{list-style:none;display:flex;flex-direction:column;gap:.6rem}
  .fit li{display:flex;gap:.55rem;color:#dbe2f1;font-size:.96rem}
  @media(max-width:700px){.fit{grid-template-columns:1fr}}

  /* founders */
  .founders{display:grid;grid-template-columns:1fr 1fr;gap:1.4rem;margin-top:2rem}
  .fcard{background:rgba(255,255,255,.04);border:1px solid rgba(124,147,217,.2);border-radius:18px;padding:1.5rem;display:flex;gap:1.1rem;align-items:center}
  .avatar{flex:0 0 auto;width:64px;height:64px;border-radius:50%;display:grid;place-items:center;font-family:var(--serif);font-size:1.4rem;font-weight:600;color:#fff;background:linear-gradient(135deg,var(--navy-3),var(--navy));border:2px solid var(--gold)}
  .fcard h3{font-size:1.15rem;color:#fff}.fcard .role{color:var(--gold);font-weight:700;font-size:.8rem;margin:.1rem 0 .3rem}
  .fcard p{font-size:.9rem;color:var(--peri-soft)}
  @media(max-width:700px){.founders{grid-template-columns:1fr}}

  /* faq */
  .faq{margin-top:2rem;max-width:820px;margin-inline:auto;border-top:1px solid rgba(124,147,217,.2)}
  details{border-bottom:1px solid rgba(124,147,217,.2)}
  summary{list-style:none;cursor:pointer;padding:1.15rem 0;display:flex;justify-content:space-between;gap:1rem;align-items:center;font-family:var(--serif);font-size:1.08rem;color:#fff;font-weight:500}
  summary::-webkit-details-marker{display:none}
  summary .ic{flex:0 0 auto;width:26px;height:26px;border-radius:50%;border:1.5px solid var(--peri);display:grid;place-items:center;color:var(--peri);transition:.2s}
  details[open] summary .ic{background:var(--gold);border-color:var(--gold);color:#20160A;transform:rotate(45deg)}
  details p{color:var(--peri-soft);padding:0 0 1.2rem;font-size:.98rem;max-width:70ch}

  /* final + footer */
  .final{background:radial-gradient(900px 400px at 50% 120%,rgba(226,167,44,.16),transparent 60%),var(--navy);text-align:center}
  .final h2{color:#fff;max-width:18ch;margin:.5rem auto .8rem}
  .final .rl{color:var(--peri-soft);max-width:50ch;margin:0 auto 1.8rem}
  .final .chips{display:flex;gap:1.4rem;justify-content:center;flex-wrap:wrap;margin-top:1.5rem;color:var(--peri-soft);font-size:.88rem}
  footer{background:#071B31;color:var(--peri-soft);padding:2.2rem 0;font-size:.84rem}
  .foot-in{display:flex;flex-wrap:wrap;justify-content:space-between;gap:1rem;align-items:center}
  .disclaimer{margin-top:1.3rem;padding-top:1.1rem;border-top:1px solid rgba(124,147,217,.15);font-size:.74rem;color:#63769a;max-width:80ch}

  .reveal{opacity:0;transform:translateY(20px);transition:opacity .7s,transform .7s}
  .reveal.in{opacity:1;transform:none}
  @media(prefers-reduced-motion:reduce){.reveal{opacity:1;transform:none;transition:none}.seal,.seal .spin{animation:none}html{scroll-behavior:auto}}

  /* Playful visual system inspired by the supplied reference site. */
  :root{
    --navy:#263653;--navy-2:#314364;--navy-3:#40577f;
    --peri:#7aa8ff;--peri-soft:#dce8ff;
    --gold:#ffd65a;--gold-ink:#263653;
    --cream:#fffef8;--cream-2:#fff8e8;
    --ink:#263653;--muted:#59677d;--line:#263653;--white:#fff;
    --serif:"Fredoka","Hanken Grotesk",system-ui,sans-serif;
    --sans:"Hanken Grotesk",system-ui,sans-serif;
    --shadow:7px 8px 0 #263653;
    --shadow-sm:4px 5px 0 #263653;
  }
  body{
    background-color:var(--cream);
    background-image:radial-gradient(circle at 12% 8%,#f27b76 0 5px,transparent 6px),radial-gradient(circle at 84% 14%,#80cf8b 0 6px,transparent 7px),radial-gradient(circle at 72% 28%,#76a6f7 0 4px,transparent 5px),radial-gradient(circle at 23% 42%,#ffd75e 0 6px,transparent 7px);
    background-size:260px 260px,330px 330px,290px 290px,370px 370px;
  }
  .wrap{width:min(1160px,92vw)}
  h1,h2,h3,.brand,.eyebrow,.btn,.big,.num,.amt,.plan,summary{font-family:var(--serif);font-style:normal}
  h1,h2,h3{font-weight:700;letter-spacing:-.025em}
  h2{font-size:clamp(2.15rem,5vw,3.65rem);line-height:1;color:var(--navy)}
  .eyebrow{display:inline-block;background:var(--gold);border:2px solid var(--navy);border-radius:8px;padding:.35rem .72rem;color:var(--navy)!important;letter-spacing:.12em;transform:rotate(-1deg);box-shadow:2px 3px 0 var(--navy)}
  .btn{background:#f27b76;color:#fff;border:2.5px solid var(--navy);border-radius:18px;padding:.92rem 1.55rem;box-shadow:5px 6px 0 var(--navy);letter-spacing:.01em}
  .btn:hover{background:#ff8e88;transform:translate(2px,2px);box-shadow:3px 4px 0 var(--navy)}
  header.nav{background:rgba(255,254,248,.95);border-bottom:2px solid var(--navy);backdrop-filter:blur(12px)}
  .nav-in{padding:.85rem 0}.brand{font-size:1.65rem;color:var(--navy);text-transform:uppercase;letter-spacing:.01em}.brand .dot{color:#f27b76}
  .nav .btn{padding:.7rem 1.1rem}
  section,section.dark,section.cream-2{position:relative;background:transparent;color:var(--ink);overflow:hidden}
  section:nth-of-type(even){background:rgba(255,239,174,.38)}
  section::before,section::after{content:"";position:absolute;border-radius:50%;z-index:0;opacity:.92}
  section::before{width:18px;height:18px;background:#7aa8ff;left:3%;top:18%}
  section::after{width:13px;height:13px;background:#f27b76;right:4%;bottom:20%}
  section>.wrap{position:relative;z-index:1}
  section.dark h2,.final h2{color:var(--navy)}

  .hero{min-height:720px;display:flex;align-items:center;background:linear-gradient(180deg,rgba(255,254,248,.96),rgba(255,254,248,.88));color:var(--ink)}
  .hero-grid{grid-template-columns:1.12fr .88fr;gap:4rem}
  .hero h1{font-size:clamp(3rem,6.5vw,5.35rem);line-height:.92;color:var(--navy);text-transform:uppercase;margin:1.2rem 0 1.25rem;text-shadow:2px 2px 0 #fff}
  .hero h1 em{color:#f27b76;text-decoration:underline;text-decoration-color:#ffd65a;text-decoration-thickness:8px;text-underline-offset:5px}
  .hero .sub{color:var(--ink);font-size:1.16rem;font-weight:700;line-height:1.55}
  .hero .urg{color:var(--muted)}.hero .urg b{color:#e85f59}
  .trust{border-top:2px dashed var(--navy);gap:1rem}
  .trust>div{background:#fff;border:2px solid var(--navy);border-radius:14px;padding:.7rem .85rem;box-shadow:3px 4px 0 var(--navy)}
  .trust .n{color:var(--navy);font-family:var(--serif);font-weight:700}.trust .l{color:var(--muted)}
  .seal-wrap{position:relative;align-items:center}
  .seal-wrap::before{display:none}
  .approval-card{width:min(390px,86vw);background:#fff;border:3px solid var(--navy);border-radius:28px;padding:2rem;box-shadow:10px 12px 0 var(--navy);transform:rotate(1.5deg);text-align:left}
  .approval-icon{width:74px;height:74px;border:3px solid var(--navy);border-radius:22px;display:grid;place-items:center;background:#7aa8ff;color:#fff;font:700 2.4rem/1 var(--serif);box-shadow:4px 5px 0 var(--navy);margin-bottom:1.35rem}
  .approval-kicker{font:700 .78rem/1.2 var(--serif);letter-spacing:.13em;text-transform:uppercase;color:#d85652;margin-bottom:.7rem}
  .approval-card h2{font-size:clamp(2rem,4vw,3rem);line-height:.95;text-transform:uppercase;color:var(--navy);margin:0;text-shadow:none!important}
  .approval-card h2 span{display:block;color:#f27b76;margin-top:.25rem}
  .approval-rule{height:5px;width:82px;background:#ffd65a;border:1.5px solid var(--navy);margin:1.25rem 0}
  .approval-meta{font-weight:800;color:var(--navy);font-size:.95rem;line-height:1.45}

  .waste .big,.cms .num,.stat .n{color:#f27b76;text-shadow:2px 2px 0 var(--navy)}
  .waste .cap,.bar-labels,.node p,.tl-note,.honest,.price .sub,.price .gst,.sixmo,.fcard p,details p,.final .rl{color:var(--muted)}
  .bar{border:2px solid var(--navy);box-shadow:var(--shadow-sm);height:68px}.bar .lost{background:#7aa8ff;color:var(--navy)}.bar .kept{background:#ffd65a;color:var(--navy)}
  .pair,.tl,.cms,.stat,.price,.risk,.fit .box,.fcard,.minibox,.faq{background:#fff!important;border:2px solid var(--navy)!important;box-shadow:var(--shadow-sm);color:var(--ink);border-radius:18px}
  .pairs{gap:1rem}.pair:nth-child(odd){transform:rotate(-.4deg)}.pair:nth-child(even){transform:rotate(.4deg)}
  .pair .old{color:var(--muted)}.pair .new{color:var(--navy)}.pair .ar,.flow .arw{color:#f27b76}
  .flow{gap:.8rem}.node{background:#fff;border:2px solid var(--navy);border-radius:18px;padding:1.2rem .7rem;box-shadow:var(--shadow-sm)}
  .node:nth-of-type(4n+1){background:#fff2a9}.node:nth-of-type(4n+3){background:#dff2ff}.node:nth-of-type(4n+5){background:#e6f7df}.node .ic{border:2px solid var(--navy);box-shadow:3px 4px 0 var(--navy)}
  .node h3,.flow-note{color:var(--navy)}
  .tl{padding:1.7rem;background:#fff9df!important}.tl text{fill:var(--navy)!important}
  .cms{background:#7aa8ff!important}.cms h3,.cms p,.cms .num small{color:var(--navy)}
  .statband{gap:1.2rem}.stat:nth-child(2n){background:#fff2a9!important}.stat .l{color:var(--muted)}
  .price-grid{gap:2rem}.price{background:#fff!important}.price.feat{background:#fff2a9!important;transform:rotate(1deg)}
  .price .plan,.price .amt,.price li,.price .pay,.price .sub,.price .gst{color:var(--navy)}.price .badge,.price .freebie{background:#f27b76;color:#fff;border:2px solid var(--navy)}
  .price .pay{background:#fff;border:2px dashed var(--navy)}.mk{background:#80cf8b;color:var(--navy);border:1.5px solid var(--navy)}
  .minibox{background:#dff2ff!important}.minibox .k,.minibox p,.minibox b{color:var(--navy)}
  .risk{background:#7aa8ff!important}.risk .rl,.risk-cards .rc{color:var(--navy)}.risk-cards .rc{background:#fff;border:2px solid var(--navy);border-radius:14px}
  .fit .yes{background:#e6f7df!important}.fit .no{background:#ffe1df!important}.fit h3,.fit li,.fit .yes h3,.fit .no h3{color:var(--navy)}
  .fcard:nth-child(1){background:#dff2ff!important}.fcard:nth-child(2){background:#fff2a9!important}.fcard h3,.fcard p{color:var(--navy)}.fcard .role{color:#d94f4a}.avatar{background:#f27b76;border:2px solid var(--navy);box-shadow:3px 4px 0 var(--navy)}
  .faq{padding:0 1.35rem}.faq details{border-bottom:2px dashed #bdc6d2}.faq summary{color:var(--navy)}details[open] summary .ic{background:#ffd65a;color:var(--navy);border-color:var(--navy)}
  .final{background:#dff2ff!important}.final .chips{color:var(--navy);font-weight:700}
  footer{background:var(--navy);color:#fff;border-top:3px solid var(--navy)}footer .brand{color:#fff}.disclaimer{color:#cfd8e9}
  @media(max-width:840px){.hero{min-height:auto}.hero-grid{gap:2.4rem}.hero h1{font-size:clamp(2.6rem,12vw,4.3rem)}.trust>div{flex:1 1 42%}.approval-card{transform:none}}
  @media(max-width:620px){.nav-in{gap:1rem}.brand{font-size:1.25rem}.nav .btn{font-size:.78rem}.pair{transform:none!important}.hero{text-align:center}.hero .sub{margin-inline:auto}.trust{text-align:left}.approval-card{text-align:center;padding:1.5rem}.approval-icon,.approval-rule{margin-left:auto;margin-right:auto}}

  /* Strengthened responsive behavior. */
  .approval-card h2,.approval-card h2 span{filter:none!important;text-shadow:none!important}
  img,svg{max-width:100%;height:auto}
  @media(max-width:840px){
    section{padding:3.6rem 0}
    .hero{padding-top:3rem}
    .hero-grid{grid-template-columns:minmax(0,1fr)}
    .seal-wrap{order:0}
    .approval-card{width:min(100%,430px);margin-inline:auto}
    .flow{align-items:stretch}
    .node{width:100%}
    .cms,.price-grid,.fit,.founders,.twoline{grid-template-columns:minmax(0,1fr)}
    .statband{grid-template-columns:repeat(2,minmax(0,1fr))}
  }
  @media(max-width:620px){
    .wrap{width:min(100% - 2rem,1160px)}
    header.nav{position:relative}
    .nav-in{align-items:center}
    .nav .btn{max-width:58%;padding:.62rem .8rem;border-radius:13px;text-align:center;justify-content:center;line-height:1.2}
    section{padding:3rem 0}
    .hero{padding-top:2.6rem}
    .hero h1{font-size:clamp(2.25rem,12.5vw,3.45rem);line-height:.94;overflow-wrap:anywhere}
    .hero h1 em{text-decoration-thickness:5px}
    .hero .sub{font-size:1rem}
    .cta-row .btn,.final .btn{width:100%;justify-content:center;text-align:center}
    .trust{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:.75rem}
    .trust>div{min-width:0;text-align:center;padding:.7rem .5rem}
    .approval-card{width:100%;border-radius:20px}
    .approval-card h2{font-size:clamp(1.9rem,11vw,2.7rem)}
    h2{font-size:clamp(1.9rem,10vw,2.8rem);overflow-wrap:anywhere}
    .waste{grid-template-columns:minmax(0,1fr)}
    .bar{height:auto;min-height:64px}.bar .lost,.bar .kept{padding:.65rem .3rem;text-align:center;line-height:1.2}
    .bar-labels{gap:1rem}.bar-labels span{max-width:50%}
    .pair{grid-template-columns:minmax(0,1fr);padding:1rem}
    .flow{gap:.65rem}.node{display:block;text-align:center;padding:1.1rem}.node .ic{margin:0 auto .7rem}
    .tl{padding:.8rem;overflow-x:auto}.tl svg{min-width:600px}
    .cms,.price,.risk,.fit .box,.fcard,.minibox{padding:1.25rem}
    .cms .num,.price .amt{overflow-wrap:anywhere}
    .price.feat{transform:none}
    .price .amt{font-size:2.15rem}.price .amt .anchor{display:block;margin:0 0 .35rem}
    .statband{grid-template-columns:minmax(0,1fr)}
    .fcard{align-items:flex-start}.avatar{width:54px;height:54px}
    .faq{padding:0 1rem}.faq summary{font-size:1rem;line-height:1.3}
    .risk-cards{grid-template-columns:minmax(0,1fr)!important}
    .final .chips{gap:.75rem;flex-direction:column}
    .foot-in{display:block;text-align:center}.foot-in>div+div{margin-top:.8rem;overflow-wrap:anywhere}
    .disclaimer{text-align:center}
  }
  @media(max-width:380px){
    .wrap{width:min(100% - 1.25rem,1160px)}
    .brand{font-size:1.05rem}.nav .btn{font-size:.7rem;max-width:62%}
    .trust{grid-template-columns:minmax(0,1fr)}
    .hero h1{font-size:2.1rem}
  }

  /* Child-friendly education theme for school decision-makers. */
  :root{
    --navy:#25345d;--navy-2:#304675;--navy-3:#41639a;
    --peri:#77a8f7;--peri-soft:#e1ecff;
    --gold:#ffd65c;--gold-ink:#ad7411;
    --cream:#fffdf6;--cream-2:#fff4d8;
    --ink:#293858;--muted:#65718a;--line:#d9ddec;--white:#fff;
    --coral:#f47c78;--mint:#91d7a0;--lav:#a894ef;--aqua:#8edbd5;--peach:#ffba8a;--pink:#f4a6c4;
    --serif:"Fredoka","Hanken Grotesk",system-ui,sans-serif;
    --sans:"Hanken Grotesk",system-ui,sans-serif;
    --shadow:0 22px 50px -34px rgba(37,52,93,.42);
    --shadow-sm:0 12px 28px -22px rgba(37,52,93,.34);
  }
  body{background:var(--cream);background-image:none;color:var(--ink)}
  h1,h2,h3,.brand,.eyebrow,.btn,.big,.num,.amt,.plan,summary{font-family:var(--serif)}
  h1,h2,h3{letter-spacing:-.025em;text-transform:none}
  h2{font-size:clamp(2rem,4.5vw,3.3rem);line-height:1.03}
  .eyebrow{background:#fff;border:1.5px solid var(--navy);border-radius:999px;padding:.38rem .75rem;color:var(--navy)!important;box-shadow:none;transform:none;font-size:.69rem;letter-spacing:.14em}
  .btn{background:var(--coral);color:#fff;border:2px solid var(--navy);border-radius:16px;box-shadow:0 5px 0 var(--navy);padding:.92rem 1.55rem}
  .btn:hover{background:#ff8e89;transform:translateY(2px);box-shadow:0 3px 0 var(--navy)}
  header.nav{background:rgba(255,253,246,.94);border-bottom:1px solid rgba(37,52,93,.14)}
  .brand{font-size:1.5rem;letter-spacing:-.025em;text-transform:none}.brand .dot{color:var(--coral)}
  section,section.dark,section.cream-2{background:var(--cream);color:var(--ink)}
  section:nth-of-type(even){background:#fff5da}
  section:nth-of-type(3n){background:#eef5ff}
  section::before,section::after{display:block;content:"";position:absolute;border-radius:50%;pointer-events:none;z-index:0;opacity:.55}
  section::before{width:14px;height:14px;background:var(--mint);left:3.5%;top:18%}
  section::after{width:10px;height:10px;background:var(--coral);right:4%;bottom:17%}
  section.dark h2,.final h2{color:var(--navy)}

  .hero{min-height:700px;background:radial-gradient(circle at 8% 18%,rgba(255,214,92,.45) 0 8px,transparent 9px),radial-gradient(circle at 92% 16%,rgba(145,215,160,.5) 0 12px,transparent 13px),radial-gradient(circle at 87% 72%,rgba(119,168,247,.42) 0 9px,transparent 10px),radial-gradient(720px 440px at 88% 28%,rgba(119,168,247,.2),transparent 68%),var(--cream);color:var(--ink)}
  .hero-grid{grid-template-columns:minmax(0,1.13fr) minmax(300px,.87fr);gap:4.5rem}
  .hero h1{font-family:var(--serif);font-weight:700;font-size:clamp(2.9rem,6vw,5rem);line-height:.96;color:var(--navy);text-transform:none;text-shadow:none}
  .hero h1 em{color:var(--coral);text-decoration:underline;text-decoration-color:var(--gold);text-decoration-thickness:6px;text-underline-offset:5px}
  .hero .sub{font-weight:600;color:#53627d;max-width:35rem}
  .trust{border-top:1px dashed rgba(37,52,93,.25);gap:1rem}
  .trust>div{background:transparent;border:0;border-radius:0;padding:0;box-shadow:none;text-align:left}
  .trust .n{font-family:var(--serif);font-size:1.65rem;color:var(--navy)}

  .approval-card{width:min(390px,86vw);background:#fff;border:2px solid var(--navy);border-radius:28px;padding:2.1rem;box-shadow:10px 12px 0 #dce8ff;transform:rotate(1deg);text-align:left}
  .approval-icon{width:64px;height:64px;border:2px solid var(--navy);border-radius:20px;background:var(--gold);color:var(--navy);font-size:2rem;box-shadow:none;margin-bottom:1.5rem}
  .approval-kicker{color:#65718a;letter-spacing:.1em}
  .approval-card h2{font-size:clamp(2rem,4vw,3rem);font-weight:700;text-transform:none;color:var(--navy);letter-spacing:-.025em}
  .approval-card h2 span{display:inline;color:var(--coral)}
  .approval-rule{height:4px;width:76px;border:0;border-radius:9px;background:var(--gold)}
  .approval-meta{color:var(--navy);font-weight:700}

  .waste .big,.cms .num,.stat .n{color:var(--navy);text-shadow:none}
  .bar{border:1.5px solid var(--navy);border-radius:12px;box-shadow:none}.bar .lost{background:#dce8ff;color:var(--navy)}.bar .kept{background:var(--gold)}
  .pair,.tl,.cms,.stat,.price,.risk,.fit .box,.fcard,.minibox,.faq{background:#fff!important;border:1.5px solid rgba(37,52,93,.18)!important;box-shadow:var(--shadow-sm);border-radius:18px}
  .pair:nth-child(n),.price.feat{transform:none}
  .pair:nth-child(1){background:#fff4ce!important}.pair:nth-child(2){background:#e9f4ff!important}.pair:nth-child(3){background:#ebf8ed!important}.pair:nth-child(4){background:#f6edff!important}
  .pair .ar,.flow .arw{color:var(--gold-ink)}
  .node,.node:nth-of-type(n){background:#fff;border:1.5px solid rgba(37,52,93,.14);border-radius:18px;padding:1rem .65rem;box-shadow:none}
  .node:nth-of-type(4n+1){background:#fff6cf}.node:nth-of-type(4n+3){background:#eaf3ff}.node:nth-of-type(4n+5){background:#ebf8ed}
  .node .ic{background:#fff;border:1.5px solid rgba(37,52,93,.2);box-shadow:var(--shadow-sm)}
  .tl{background:#fff!important}
  .cms{background:linear-gradient(135deg,var(--navy-2),var(--navy))!important;border:0!important;box-shadow:var(--shadow)}
  .cms h3,.cms p,.cms .num small{color:#fff}.cms .num{color:var(--gold)}
  .stat:nth-child(n){background:#fff!important}.stat:nth-child(2){background:#fff7d8!important}.stat:nth-child(3){background:#edf5ff!important}.stat:nth-child(4){background:#eef9ef!important}
  .price{background:#edf7ff!important}.price.feat{background:#fff8da!important;border:2px solid var(--gold)!important}
  .price .badge,.price .freebie{background:var(--gold);color:#24190a;border:0}
  .price .pay{background:#f3f3ef;border:0}.mk{border:0;background:var(--gold);color:#171900}
  .minibox{background:#fff!important}.minibox .k,.minibox p,.minibox b{color:var(--navy)}
  .risk{background:var(--navy)!important;border:0!important;box-shadow:var(--shadow)}
  .risk h2,.risk .rl{color:#fff}.risk-cards .rc{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.16);color:#fff}
  .fit .yes,.fit .no{background:#fff!important}.fit .yes{border-top:5px solid var(--mint)!important}.fit .no{border-top:5px solid var(--coral)!important}
  .fcard:nth-child(1){background:#eaf5ff!important}.fcard:nth-child(2){background:#fff3d9!important}.avatar{background:var(--navy-2);border:0;box-shadow:none}.fcard .role{color:var(--gold-ink)}
  .faq{padding:0 1.4rem;box-shadow:none;background:#fff9fd!important}.faq details{border-bottom:1px solid var(--line)}details[open] summary .ic{background:var(--gold);border-color:var(--gold)}
  .final{background:linear-gradient(135deg,#eaf2ff,#fff5d6)!important}.final .chips{color:var(--muted)}
  footer{background:var(--navy);border-top:0}
  @media(max-width:840px){.hero-grid{grid-template-columns:minmax(0,1fr);gap:3rem}.approval-card{transform:none}.seal-wrap{order:0}}
  @media(max-width:620px){
    .hero{text-align:left}.hero h1{font-size:clamp(2.35rem,11vw,3.45rem)}.hero .sub{margin-inline:0}
    .trust{grid-template-columns:repeat(2,minmax(0,1fr));text-align:left}.trust>div{text-align:left}
    .approval-card{text-align:left}.approval-icon,.approval-rule{margin-left:0;margin-right:0}
    .node{background:#fff;border:1.5px solid rgba(37,52,93,.16);border-radius:16px;padding:1.1rem}
  }
  .kid-vector{position:absolute;z-index:1;pointer-events:none;user-select:none}
  .kid-vector svg{width:100%;height:auto;overflow:visible;filter:drop-shadow(0 8px 8px rgba(37,52,93,.12))}
  .kid-vector.dino{width:128px;right:2.5%;bottom:4%;transform:rotate(-4deg)}
  .kid-vector.croc{width:118px;left:1.5%;bottom:7%;transform:rotate(5deg)}
  .kid-vector.owl{width:92px;right:3%;top:12%;transform:rotate(4deg)}
  .kid-vector.rocket{width:94px;right:5%;top:18%;transform:rotate(8deg)}
  .kid-vector.lion{width:100px;left:2%;top:12%;transform:rotate(-5deg)}
  .kid-vector.elephant{width:112px;right:2%;bottom:6%;transform:rotate(3deg)}
  .kid-vector.bear{width:94px;left:2.5%;top:10%;transform:rotate(-4deg)}
  .kid-vector.rainbow{width:112px;right:2%;top:8%;transform:rotate(4deg)}
  @media(max-width:1100px){.kid-vector.dino{width:96px;right:1%}.kid-vector.croc{width:86px}.kid-vector.owl,.kid-vector.rocket,.kid-vector.lion,.kid-vector.bear{width:76px}.kid-vector.elephant,.kid-vector.rainbow{width:88px}}
  @media(max-width:760px){.kid-vector{opacity:.72}.kid-vector.dino{width:72px;right:2%;bottom:1%}.kid-vector.croc{width:64px;left:auto;right:2%;bottom:2%}.kid-vector.owl{width:58px;right:2%;top:5%}.kid-vector.rocket{width:62px;right:2%;top:7%}.kid-vector.lion,.kid-vector.bear{width:58px;left:auto;right:2%;top:3%}.kid-vector.elephant,.kid-vector.rainbow{width:66px;right:2%;bottom:2%;top:auto}}
  @media(max-width:420px){.kid-vector.croc,.kid-vector.owl,.kid-vector.lion,.kid-vector.bear{display:none}.kid-vector.dino,.kid-vector.rocket,.kid-vector.elephant,.kid-vector.rainbow{opacity:.42}}

  /* Modern classroom workbook concept: child-aware, principal-ready. */
  :root{
    --board:#173f3b;--board-2:#20514b;--paper:#fbfaf4;--paper-blue:#eaf3f6;
    --pencil:#f1bd48;--crayon:#ee716d;--school-blue:#4d83c6;--leaf:#71ae7b;
    --navy:#20334d;--navy-2:#29445f;--navy-3:#365b79;
    --gold:var(--pencil);--gold-ink:#9a6711;--cream:var(--paper);--cream-2:#f3efe2;
    --ink:#24364c;--muted:#657184;--line:#d9d8cf;
    --shadow:0 18px 40px -30px rgba(32,51,77,.42);--shadow-sm:0 10px 24px -20px rgba(32,51,77,.35);
  }
  body{background-color:var(--paper);background-image:linear-gradient(rgba(77,131,198,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(77,131,198,.045) 1px,transparent 1px);background-size:28px 28px}
  header.nav{background:rgba(251,250,244,.96);border-bottom:1px solid #d9d8cf}
  .brand{color:var(--board);font-size:1.55rem}.brand .dot{color:var(--crayon)}
  .nav .btn,.btn{background:var(--crayon);border:0;border-radius:10px;box-shadow:none;color:#fff}
  .btn:hover{background:#f1827e;box-shadow:none;transform:translateY(-2px)}
  section,section.dark,section.cream-2{background:var(--paper);color:var(--ink);padding-block:clamp(3.8rem,7vw,6.2rem)}
  section:nth-of-type(even){background:#f5f0df}
  section:nth-of-type(3n){background:var(--paper-blue)}
  section::before,section::after{display:none}
  .center{text-align:left;margin-inline:0;max-width:820px;border-left:5px solid var(--pencil);padding-left:1.15rem}
  h2{color:var(--navy);font-size:clamp(2.1rem,4.8vw,3.55rem);line-height:1.02}
  .eyebrow{background:transparent;border:0;border-radius:0;padding:0;color:var(--crayon)!important;letter-spacing:.16em}

  .hero{min-height:730px;background:radial-gradient(circle at 7% 16%,rgba(255,255,255,.08) 0 4px,transparent 5px),radial-gradient(circle at 91% 80%,rgba(241,189,72,.18) 0 7px,transparent 8px),linear-gradient(135deg,var(--board),#102f2d);color:#fff;border-bottom:10px solid var(--pencil)}
  .hero::before{display:block;content:"";position:absolute;inset:24px;border:1px dashed rgba(255,255,255,.15);border-radius:24px;pointer-events:none}
  .hero-grid{grid-template-columns:minmax(0,1.2fr) minmax(310px,.8fr);gap:4.5rem}
  .hero .eyebrow{color:#ffe18a!important}
  .hero h1{color:#fff;font-size:clamp(3rem,6vw,5.2rem);line-height:.96}
  .hero h1 em{color:#ffe07b;text-decoration:none}
  .hero .sub{color:#dce9e6;font-weight:500}
  .hero .urg{color:#c7d9d6}.hero .urg b{color:#ffe07b}
  .trust{border-top:1px dashed rgba(255,255,255,.28);gap:1.6rem}
  .trust .n{color:#fff}.trust .l{color:#c7d9d6}
  .approval-card{background:#fffdf7;border:0;border-radius:12px;padding:2.2rem;box-shadow:12px 12px 0 var(--pencil);transform:rotate(1deg);position:relative}
  .approval-card::before{content:"";position:absolute;width:70px;height:18px;background:rgba(255,255,255,.65);top:-8px;left:50%;transform:translateX(-50%) rotate(-2deg);border:1px solid rgba(32,51,77,.08)}
  .approval-icon{background:var(--leaf);border:0;border-radius:50%;color:#fff}
  .approval-kicker{color:var(--school-blue)}.approval-card h2{color:var(--navy)}.approval-card h2 span{color:var(--crayon)}
  .approval-rule{background:var(--pencil)}

  .waste{background:#fff;border:1px solid var(--line);border-radius:18px;padding:clamp(1.3rem,3vw,2.2rem);box-shadow:var(--shadow)}
  .waste .big{color:var(--crayon)}
  .bar{border:0;border-radius:8px}.bar .lost{background:#cddde8}.bar .kept{background:var(--pencil)}
  .pairs{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));max-width:none!important}
  .pair:nth-child(n){background:#fff!important;border:1px solid var(--line)!important;border-radius:14px;box-shadow:none;padding:1.25rem}
  .pair .old{text-align:left}.pair .new{color:var(--board)}
  .flow{align-items:stretch;gap:.8rem}
  .node,.node:nth-of-type(n){background:#fff;border:1px solid var(--line);border-radius:14px;padding:1.25rem .7rem}
  .node:nth-of-type(4n+1){border-top:5px solid var(--pencil)}.node:nth-of-type(4n+3){border-top:5px solid var(--school-blue)}.node:nth-of-type(4n+5){border-top:5px solid var(--leaf)}
  .node .ic{border:0;background:#f1f5f7;box-shadow:none}
  .tl{border:1px solid var(--line)!important;border-radius:14px;background:#fff!important;box-shadow:none}
  .cms{background:var(--board)!important;border:0!important;border-radius:16px;box-shadow:none}.cms .num{color:#ffe07b}
  .statband{gap:.8rem}.stat:nth-child(n){background:#fff!important;border:1px solid var(--line)!important;border-radius:12px;box-shadow:none}.stat:nth-child(1){border-top:5px solid var(--crayon)!important}.stat:nth-child(2){border-top:5px solid var(--pencil)!important}.stat:nth-child(3){border-top:5px solid var(--school-blue)!important}.stat:nth-child(4){border-top:5px solid var(--leaf)!important}
  .price-grid{gap:1.2rem}.price{background:#fff!important;border:1px solid var(--line)!important;border-radius:14px;box-shadow:none}.price.feat{background:var(--board)!important;border:0!important}.price.feat .plan,.price.feat .amt,.price.feat li,.price.feat .sub,.price.feat .gst,.price.feat .pay{color:#fff}.price.feat .pay{background:rgba(255,255,255,.09)}.price .badge,.price .freebie{background:var(--pencil);color:#3d2b08}
  .minibox{border:1px solid var(--line)!important;border-radius:12px;box-shadow:none!important}
  .risk{background:var(--school-blue)!important;border-radius:16px;box-shadow:none}.risk-cards .rc{background:#fff;color:var(--navy);border:0}
  .fit .box,.fcard{background:#fff!important;border:1px solid var(--line)!important;border-radius:14px;box-shadow:none}.fit .yes{border-top:6px solid var(--leaf)!important}.fit .no{border-top:6px solid var(--crayon)!important}
  .fcard:nth-child(1){border-left:6px solid var(--school-blue)!important}.fcard:nth-child(2){border-left:6px solid var(--pencil)!important}.avatar{background:var(--board)}
  .faq{background:#fff!important;border:1px solid var(--line)!important;border-radius:14px;box-shadow:none}
  .final{background:var(--board)!important;border-top:10px solid var(--pencil)}.final h2{color:#fff}.final .eyebrow{color:#ffe07b!important}.final .rl,.final .chips{color:#dce9e6}
  footer{background:#102f2d}

  .kid-vector{background:#fff;border:2px solid var(--navy);border-radius:50%;padding:8px;box-shadow:0 6px 0 rgba(32,51,77,.16)}
  .kid-vector svg{filter:none}
  .kid-vector.dino{right:1.5%;bottom:3%}.kid-vector.croc{left:1%;bottom:5%}.kid-vector.lion{left:1%;top:9%}.kid-vector.owl{right:1%;top:8%}.kid-vector.elephant{right:1%;bottom:5%}.kid-vector.bear{left:1%;top:7%}.kid-vector.rainbow{right:1%;top:7%}.kid-vector.rocket{right:2%;top:14%}
  @media(max-width:900px){.hero-grid{grid-template-columns:minmax(0,1fr)}.pairs{grid-template-columns:minmax(0,1fr)}.approval-card{max-width:440px;margin-inline:auto}.center{max-width:calc(100% - 5rem)}}
  @media(max-width:620px){
    section,section.dark,section.cream-2{padding-block:3.2rem}.hero{padding-top:3rem}.hero::before{inset:10px}
    .hero h1{font-size:clamp(2.4rem,11.5vw,3.5rem)}.center{max-width:100%;padding-left:.8rem;border-left-width:4px}
    .trust{grid-template-columns:repeat(2,minmax(0,1fr))}.approval-card{box-shadow:7px 7px 0 var(--pencil);transform:none}
    .waste{padding:1rem}.flow{gap:.65rem}.price.feat{margin-top:.7rem}.kid-vector{border-width:1.5px;padding:5px;box-shadow:none}
  }

  /* Premium education SaaS visual system. */
  :root{
    --navy:#172554;--navy-2:#1e3a8a;--navy-3:#2563eb;
    --blue:#2563eb;--sky:#60a5fa;--sky-soft:#eff6ff;--green:#22c55e;--green-soft:#ecfdf3;
    --gold:#fbbf24;--gold-ink:#a16207;--coral:#fb7185;--lav:#8b5cf6;
    --cream:#ffffff;--cream-2:#f7fbff;--paper:#fff;--paper-blue:#f3f8ff;
    --ink:#172554;--muted:#64748b;--line:#dbe7f5;--white:#fff;
    --sans:"Plus Jakarta Sans",system-ui,sans-serif;--serif:"Nunito",system-ui,sans-serif;
    --shadow:0 24px 60px -34px rgba(37,99,235,.28);--shadow-sm:0 14px 32px -24px rgba(37,99,235,.24);
  }
  html{background:#fff}body{font-family:var(--sans);background:#fff;background-image:none;color:var(--ink)}
  h1,h2,h3,.brand,.eyebrow,.btn,.big,.num,.amt,.plan,summary{font-family:var(--sans)}
  h1,h2,h3{letter-spacing:-.035em}h2{font-size:clamp(2.05rem,4.4vw,3.4rem);line-height:1.06}
  .wrap{width:min(1160px,calc(100% - 40px))}
  header.nav{background:rgba(255,255,255,.86);backdrop-filter:blur(18px);border-bottom:1px solid rgba(37,99,235,.1)}
  .nav-in{padding:.85rem 0}.brand{color:var(--navy);font-weight:800}.brand .dot{color:var(--blue)}
  .btn,.nav .btn{background:linear-gradient(135deg,var(--blue),#4f7df2);border:0;border-radius:14px;color:#fff;box-shadow:0 12px 26px -14px rgba(37,99,235,.7);font-weight:800}
  .btn:hover{background:linear-gradient(135deg,#1d4ed8,#2563eb);transform:translateY(-2px);box-shadow:0 16px 30px -16px rgba(37,99,235,.75)}
  section,section.dark,section.cream-2{background:#fff;color:var(--ink);padding-block:clamp(4.5rem,8vw,7rem);overflow:hidden}
  section:nth-of-type(even){background:linear-gradient(180deg,#f8fbff,#f2f8ff)}
  section:nth-of-type(3n){background:#fff}
  section::before,section::after{display:none}
  section.dark h2,.final h2{color:var(--navy)}
  .center{text-align:center;margin-inline:auto;max-width:790px;border:0;padding:0}
  .eyebrow{display:inline-flex;align-items:center;background:#eef5ff;border:1px solid #d5e6ff;border-radius:999px;padding:.42rem .8rem;color:var(--blue)!important;font-family:var(--sans);font-size:.7rem;letter-spacing:.14em;box-shadow:none}

  .hero{min-height:760px;background:radial-gradient(520px 420px at 90% 18%,rgba(96,165,250,.22),transparent 68%),radial-gradient(420px 340px at 8% 92%,rgba(34,197,94,.1),transparent 72%),linear-gradient(145deg,#fff 0%,#f5f9ff 55%,#eff6ff 100%);color:var(--ink);border:0;padding-block:clamp(4rem,7vw,6.5rem)}
  .hero::before{display:block;content:"";position:absolute;width:260px;height:260px;border-radius:50%;background:radial-gradient(circle,#bfdbfe 1.8px,transparent 2px);background-size:18px 18px;right:-45px;top:90px;opacity:.6;border:0}
  .hero::after{display:block;content:"";position:absolute;width:170px;height:170px;border:1px solid rgba(37,99,235,.12);border-radius:48px;left:-80px;bottom:45px;transform:rotate(22deg)}
  .hero-grid{grid-template-columns:minmax(0,1.02fr) minmax(420px,.98fr);gap:4.5rem;align-items:center}
  .hero .eyebrow{color:var(--blue)!important;background:#fff;border-color:#cfe1ff}
  .hero h1{font-size:clamp(3.1rem,5.8vw,5.25rem);line-height:.98;color:var(--navy);font-weight:800}
  .hero h1 em{color:var(--blue);font-style:normal;text-decoration:none;position:relative}
  .hero h1 em::after{content:"";position:absolute;height:8px;background:rgba(34,197,94,.24);border-radius:99px;left:0;right:0;bottom:-2px;z-index:-1}
  .hero .sub{color:#52647e;font-size:1.14rem;line-height:1.7;font-weight:500}
  .hero .urg{color:#64748b}.hero .urg b{color:var(--blue)}
  .trust{border-top:1px solid #dbe7f5;gap:1.6rem}.trust .n{color:var(--navy);font-size:1.55rem}.trust .l{color:#64748b}
  .seal-wrap{position:relative;display:grid;place-items:center;min-height:520px}
  .hero-education-visual{width:min(520px,100%);height:auto;filter:drop-shadow(0 28px 28px rgba(37,99,235,.12))}
  .approval-card{position:absolute;left:2%;bottom:4%;width:240px;background:rgba(255,255,255,.88);backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,.9);border-radius:20px;padding:1.15rem;box-shadow:0 20px 45px -24px rgba(30,64,175,.42);transform:none;text-align:left}
  .approval-card::before{display:none}.approval-icon{width:42px;height:42px;border:0;border-radius:12px;background:var(--green-soft);color:var(--green);font-size:1.3rem;margin-bottom:.8rem}
  .approval-kicker{font-size:.62rem;color:var(--blue);margin-bottom:.42rem}.approval-card h2{font-size:1.42rem;line-height:1.05;color:var(--navy)}.approval-card h2 span{color:var(--blue)}
  .approval-rule{height:2px;width:48px;background:var(--green);margin:.75rem 0}.approval-meta{font-size:.76rem;color:#64748b}

  .waste{background:rgba(255,255,255,.9);border:1px solid var(--line);border-radius:24px;padding:clamp(1.5rem,4vw,2.8rem);box-shadow:var(--shadow-sm)}
  .waste .big{color:var(--blue)}.bar{border:0;border-radius:12px}.bar .lost{background:#dbeafe;color:var(--navy)}.bar .kept{background:#86efac;color:#14532d}
  .pairs{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1rem;max-width:none!important}
  .pair:nth-child(n){background:rgba(255,255,255,.86)!important;border:1px solid var(--line)!important;border-radius:20px;padding:1.3rem;box-shadow:var(--shadow-sm)}
  .pair .old{text-align:left;color:#64748b}.pair .new{color:var(--navy)}.pair .ar{color:var(--blue)}
  .flow{gap:1rem}.node,.node:nth-of-type(n){background:#fff;border:1px solid var(--line);border-radius:22px;padding:1.35rem .8rem;box-shadow:var(--shadow-sm)}
  .node:nth-of-type(4n+1){border-top:4px solid var(--blue)}.node:nth-of-type(4n+3){border-top:4px solid var(--green)}.node:nth-of-type(4n+5){border-top:4px solid var(--lav)}
  .node .ic{background:linear-gradient(145deg,#eff6ff,#fff);border:1px solid #dbeafe;box-shadow:none}
  .tl{background:rgba(255,255,255,.92)!important;border:1px solid var(--line)!important;border-radius:24px;box-shadow:var(--shadow-sm)}
  .cms{background:linear-gradient(135deg,#2563eb,#4f46e5)!important;border:0!important;border-radius:24px;box-shadow:var(--shadow)}.cms .num{color:#fff}.cms h3,.cms p,.cms .num small{color:#fff}
  .statband{gap:1rem}.stat:nth-child(n){background:#fff!important;border:1px solid var(--line)!important;border-radius:18px;box-shadow:var(--shadow-sm)}.stat:nth-child(1){border-top:4px solid var(--blue)!important}.stat:nth-child(2){border-top:4px solid var(--green)!important}.stat:nth-child(3){border-top:4px solid var(--gold)!important}.stat:nth-child(4){border-top:4px solid var(--lav)!important}.stat .n{color:var(--blue)}
  .price-grid{gap:1.3rem}.price{background:#fff!important;border:1px solid var(--line)!important;border-radius:24px;box-shadow:var(--shadow-sm);padding:2rem}.price.feat{background:linear-gradient(160deg,#eff6ff,#fff)!important;border:1.5px solid #93c5fd!important}.price.feat .plan,.price.feat .amt,.price.feat li,.price.feat .sub,.price.feat .gst,.price.feat .pay{color:var(--navy)}.price .badge,.price .freebie{background:var(--blue);color:#fff}.price .pay{background:#eff6ff}.mk{background:#dcfce7;color:#15803d}
  .minibox{background:#fff!important;border:1px solid var(--line)!important;border-radius:18px;box-shadow:var(--shadow-sm)!important}
  .risk{background:linear-gradient(135deg,#2563eb,#60a5fa)!important;border-radius:28px;box-shadow:var(--shadow)}.risk h2,.risk .rl{color:#fff}.risk-cards .rc{background:rgba(255,255,255,.16);backdrop-filter:blur(10px);color:#fff;border:1px solid rgba(255,255,255,.3)}
  .fit .box,.fcard{background:#fff!important;border:1px solid var(--line)!important;border-radius:22px;box-shadow:var(--shadow-sm)}.fit .yes{border-top:4px solid var(--green)!important}.fit .no{border-top:4px solid var(--coral)!important}
  .fcard:nth-child(1),.fcard:nth-child(2){border-left:1px solid var(--line)!important}.avatar{background:linear-gradient(135deg,var(--blue),var(--sky));border:0}.fcard .role{color:var(--blue)}
  .faq{background:rgba(255,255,255,.9)!important;border:1px solid var(--line)!important;border-radius:24px;padding:0 1.5rem;box-shadow:var(--shadow-sm)}.faq details{border-bottom:1px solid var(--line)}details[open] summary .ic{background:var(--blue);border-color:var(--blue);color:#fff}
  .final{background:radial-gradient(480px 240px at 85% 30%,rgba(96,165,250,.3),transparent 70%),linear-gradient(135deg,#eff6ff,#f8fbff)!important;border:0}.final h2{color:var(--navy)}.final .eyebrow{color:var(--blue)!important}.final .rl,.final .chips{color:#64748b}
  footer{background:#172554}
  .kid-vector{display:none!important}
  @media(max-width:920px){.hero-grid{grid-template-columns:minmax(0,1fr);gap:2.5rem}.seal-wrap{min-height:500px}.hero-education-visual{width:min(560px,100%)}.pairs{grid-template-columns:minmax(0,1fr)}}
  @media(max-width:620px){
    .wrap{width:min(100% - 28px,1160px)}section,section.dark,section.cream-2{padding-block:3.75rem}.hero{padding-top:3rem}.hero::before{width:160px;height:160px;right:-70px}
    .hero h1{font-size:clamp(2.45rem,11.5vw,3.55rem)}.hero .sub{font-size:1rem}.trust{grid-template-columns:repeat(2,minmax(0,1fr));gap:.9rem}
    .seal-wrap{min-height:390px}.approval-card{width:205px;left:0;bottom:0;padding:1rem}.approval-card h2{font-size:1.2rem}
    .center{text-align:left}.flow{gap:.7rem}.node{padding:1.15rem}.price{padding:1.4rem}.faq{padding-inline:1rem}
  }
</style>
</head>
<body>

<header class="nav"><div class="wrap nav-in">
  <a class="brand" href="#top">Acquirely<span class="dot">.</span></a>
  <a class="btn" href="#book">Book an Appointment</a>
</div></header>

<!-- HERO -->
<section class="hero" id="top">
  <div class="kid-vector dino" aria-hidden="true">
    <svg viewBox="0 0 150 120"><path d="M32 76c-18-3-24-16-18-29 5 8 12 12 22 11 7-24 28-40 55-36 20 3 32 18 30 37-2 17-13 27-30 30l-2 18H72l-2-17H50l-4 17H29z" fill="#91d7a0" stroke="#25345d" stroke-width="4" stroke-linejoin="round"/><path d="M91 23l9-12 7 15m4 4 14-7-6 15" fill="#ffd65c" stroke="#25345d" stroke-width="4" stroke-linejoin="round"/><circle cx="96" cy="45" r="4" fill="#25345d"/><path d="M104 56q9 7 16 0" fill="none" stroke="#25345d" stroke-width="3" stroke-linecap="round"/><path d="M47 69q14-12 29 0v18H47z" fill="#77a8f7" stroke="#25345d" stroke-width="3"/><path d="M61 70v17" stroke="#25345d" stroke-width="3"/></svg>
  </div>
  <div class="wrap hero-grid">
    <div class="reveal in">
      <span class="eyebrow d">For school &amp; education publishers</span>
      <h1>You publish great books. You sell them <em>one school visit at a time.</em></h1>
      <p class="sub">We get school decision-makers to book calls with you — right when they're choosing next year's books.</p>
      <div class="cta-row"><a class="btn" href="#book">Book a Call to Understand How? <span class="arw">→</span></a></div>
      <p class="urg">Only 3 spots available — sampling season starts in September. <b>Get your unfair advantage.</b></p>
      <div class="trust">
        <div><div class="n">11+</div><div class="l">Years as a book publisher</div></div>
        <div><div class="n">300+</div><div class="l">Titles published</div></div>
        <div><div class="n">2,000+</div><div class="l">Schools reached every year</div></div>
        <div><div class="n">₹30Cr+</div><div class="l">Ad spend managed</div></div>
      </div>
    </div>
    <div class="seal-wrap reveal in">
      <svg class="hero-education-visual" viewBox="0 0 560 520" role="img" aria-label="Students and an educator learning together in front of a modern school">
        <defs>
          <linearGradient id="eduBlob" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#DBEAFE"/><stop offset="1" stop-color="#ECFDF3"/></linearGradient>
          <linearGradient id="eduSchool" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#60A5FA"/><stop offset="1" stop-color="#2563EB"/></linearGradient>
        </defs>
        <path d="M78 210C57 115 142 41 247 61c81-55 205-1 216 99 73 61 35 194-61 218-55 88-191 91-251 9-99 10-148-104-73-177z" fill="url(#eduBlob)"/>
        <circle cx="92" cy="125" r="13" fill="#FBBF24"/><circle cx="468" cy="112" r="9" fill="#22C55E"/><circle cx="487" cy="348" r="15" fill="#C4B5FD"/>
        <path d="M179 145 280 82l101 63v164H179z" fill="#fff" stroke="#BFDBFE" stroke-width="4"/>
        <path d="m164 151 116-73 116 73" fill="none" stroke="#2563EB" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="203" y="168" width="154" height="28" rx="8" fill="url(#eduSchool)"/><rect x="259" y="223" width="43" height="86" rx="6" fill="#DBEAFE"/><rect x="211" y="220" width="31" height="39" rx="5" fill="#E0F2FE" stroke="#93C5FD" stroke-width="3"/><rect x="319" y="220" width="31" height="39" rx="5" fill="#E0F2FE" stroke="#93C5FD" stroke-width="3"/>
        <path d="M236 166h88" stroke="#fff" stroke-width="5" stroke-linecap="round"/>
        <ellipse cx="283" cy="411" rx="184" ry="35" fill="#C7DDF8" opacity=".75"/>
        <g transform="translate(72 264)">
          <circle cx="68" cy="56" r="34" fill="#A86F4E"/><path d="M37 52c1-32 18-48 43-44 20 4 28 21 25 43-19-7-45-8-68 1z" fill="#25345D"/>
          <path d="M29 145c2-46 16-68 40-68s40 22 42 68z" fill="#22C55E"/><path d="M56 88h25" stroke="#fff" stroke-width="5" stroke-linecap="round"/>
          <path d="M107 107q28-21 53-3" fill="none" stroke="#A86F4E" stroke-width="12" stroke-linecap="round"/>
          <rect x="125" y="85" width="66" height="47" rx="7" fill="#fff" stroke="#2563EB" stroke-width="4"/><path d="M124 134h69" stroke="#2563EB" stroke-width="5" stroke-linecap="round"/>
        </g>
        <g transform="translate(243 281)">
          <circle cx="65" cy="43" r="31" fill="#D89B72"/><path d="M34 38c2-27 18-40 39-37 18 2 27 17 24 37-18-8-43-8-63 0z" fill="#172554"/>
          <path d="M27 134c2-42 15-62 38-62s36 20 39 62z" fill="#FB7185"/><path d="M51 84h26" stroke="#fff" stroke-width="5" stroke-linecap="round"/>
          <path d="M21 101-6 123m107-23 27 24" stroke="#D89B72" stroke-width="11" stroke-linecap="round"/>
          <path d="M-18 117h58v39h-58z" fill="#fff" stroke="#60A5FA" stroke-width="4"/><path d="M11 118v37" stroke="#60A5FA" stroke-width="3"/>
        </g>
        <g transform="translate(390 270)">
          <circle cx="45" cy="47" r="32" fill="#8C573C"/><path d="M14 42c3-28 18-42 41-39 18 2 27 17 24 38-19-7-44-7-65 1z" fill="#3B2A42"/>
          <path d="M7 141c2-45 16-66 38-66 24 0 38 21 40 66z" fill="#8B5CF6"/><path d="M31 87h26" stroke="#fff" stroke-width="5" stroke-linecap="round"/>
          <path d="M13 102-9 126" stroke="#8C573C" stroke-width="11" stroke-linecap="round"/>
          <path d="M-27 114h52v35h-52z" fill="#FBBF24" stroke="#A16207" stroke-width="3"/><path d="m-22 120 21 10 19-10" fill="none" stroke="#A16207" stroke-width="3"/>
        </g>
        <g transform="translate(85 87)"><path d="m0 22 35-18 35 18-35 18z" fill="#2563EB"/><path d="M16 31v17q19 13 38 0V31" fill="#60A5FA"/><path d="M67 24v27" stroke="#172554" stroke-width="4"/><circle cx="67" cy="54" r="5" fill="#FBBF24"/></g>
        <g transform="translate(435 175)" fill="none" stroke="#22C55E" stroke-width="4"><ellipse cx="35" cy="34" rx="32" ry="13"/><ellipse cx="35" cy="34" rx="32" ry="13" transform="rotate(60 35 34)"/><ellipse cx="35" cy="34" rx="32" ry="13" transform="rotate(120 35 34)"/><circle cx="35" cy="34" r="6" fill="#22C55E" stroke="none"/></g>
        <g transform="translate(35 358)"><path d="M0 42h76v49H0z" fill="#fff" stroke="#2563EB" stroke-width="4"/><path d="M38 43v47" stroke="#2563EB" stroke-width="3"/><path d="M7 53q15-8 27 0m8 0q15-8 27 0" fill="none" stroke="#93C5FD" stroke-width="3"/></g>
      </svg>
      <div class="approval-card" role="img" aria-label="Founder-operator seal — approved for adoption">
        <div class="approval-icon" aria-hidden="true">✓</div>
        <div class="approval-kicker">Founder-operator · School publishing</div>
        <h2>Approved for <span>adoption</span></h2>
        <div class="approval-rule" aria-hidden="true"></div>
        <div class="approval-meta">12 years in education</div>
      </div>
    </div>
  </div>
</section>

<!-- HIDDEN COST -->
<section class="cream-2">
  <div class="kid-vector croc" aria-hidden="true">
    <svg viewBox="0 0 150 100"><path d="M13 59c8-22 31-34 58-31l27 3 34-16-11 23 15 12-31 7c-8 20-29 31-56 27-19-2-31-11-36-25z" fill="#91d7a0" stroke="#25345d" stroke-width="4" stroke-linejoin="round"/><path d="M90 33l10-12 8 15" fill="#ffd65c" stroke="#25345d" stroke-width="3"/><circle cx="103" cy="42" r="4" fill="#25345d"/><path d="M111 52l17-2-13 10" fill="#fff" stroke="#25345d" stroke-width="3"/><path d="M32 70l-10 20m45-13-2 16" stroke="#25345d" stroke-width="5" stroke-linecap="round"/><path d="M47 37l-8-14m24 12-2-16" stroke="#f47c78" stroke-width="5" stroke-linecap="round"/></svg>
  </div>
  <div class="wrap">
    <div class="center reveal"><span class="eyebrow">The hidden cost</span>
      <h2>Most of your field spend vanishes untracked.</h2></div>
    <div class="waste reveal">
      <div>
        <div class="big"><span>80%</span></div>
        <p class="cap">Your rep reached the school — but did your sample reach the decider, or get buried under 100 others?</p>
      </div>
      <div>
        <div class="bar"><div class="lost">Untracked field spend</div><div class="kept">Tracked</div></div>
        <div class="bar-labels"><span>Reps, samples, visits — no attribution</span><span>Digital</span></div>
      </div>
    </div>
  </div>
</section>

<!-- THE SHIFT -->
<section class="dark">
  <div class="kid-vector lion" aria-hidden="true">
    <svg viewBox="0 0 110 115"><circle cx="55" cy="57" r="43" fill="#ffba8a" stroke="#25345d" stroke-width="4"/><path d="M25 28 19 9l19 12M84 28 92 9 72 20" fill="#f47c78" stroke="#25345d" stroke-width="4" stroke-linejoin="round"/><circle cx="55" cy="58" r="29" fill="#ffd65c" stroke="#25345d" stroke-width="4"/><circle cx="44" cy="53" r="4" fill="#25345d"/><circle cx="66" cy="53" r="4" fill="#25345d"/><path d="m55 61-7 6 7 5 7-5z" fill="#f47c78" stroke="#25345d" stroke-width="2"/><path d="M40 80q15 10 30 0" fill="none" stroke="#25345d" stroke-width="3" stroke-linecap="round"/></svg>
  </div>
  <div class="wrap">
    <div class="center reveal"><span class="eyebrow d">The shift</span>
      <h2>The best book doesn't win the adoption. The one in front of the decider does.</h2></div>
    <div class="pairs reveal" style="margin-inline:auto">
      <div class="pair"><div class="old">Your rep drives out to cold-call schools</div><div class="ar">→</div><div class="new">Calls booked to your calendar</div></div>
      <div class="pair"><div class="old">Samples buried in the pile</div><div class="ar">→</div><div class="new">In front of the real decider</div></div>
      <div class="pair"><div class="old">No idea what worked</div><div class="ar">→</div><div class="new">Every rupee tracked to a meeting</div></div>
      <div class="pair"><div class="old">A rep-day costs ~₹10K, with no proof the book reached the decider</div><div class="ar">→</div><div class="new">Every ₹10K books 5–10 meetings with decision-makers</div></div>
    </div>
  </div>
</section>

<!-- HOW IT WORKS -->
<section class="cream-2">
  <div class="kid-vector owl" aria-hidden="true">
    <svg viewBox="0 0 100 115"><path d="M18 41 26 14l18 15h13l18-15 8 27c9 13 9 38-1 52-9 13-22 18-32 18S27 106 18 93C8 79 9 54 18 41z" fill="#a894ef" stroke="#25345d" stroke-width="4" stroke-linejoin="round"/><circle cx="35" cy="55" r="14" fill="#fff" stroke="#25345d" stroke-width="3"/><circle cx="65" cy="55" r="14" fill="#fff" stroke="#25345d" stroke-width="3"/><circle cx="35" cy="55" r="5" fill="#25345d"/><circle cx="65" cy="55" r="5" fill="#25345d"/><path d="m50 63-8 7 8 5 8-5z" fill="#ffd65c" stroke="#25345d" stroke-width="2"/><path d="M31 88q19 12 38 0" fill="none" stroke="#25345d" stroke-width="3" stroke-linecap="round"/></svg>
  </div>
  <div class="wrap">
    <div class="center reveal"><span class="eyebrow">How it works</span>
      <h2>From cold doors to booked calls.</h2></div>
    <div class="flow reveal">
      <div class="node"><div class="ic"><svg viewBox="0 0 26 26" fill="none" stroke="#0A2542" stroke-width="1.8" stroke-linecap="round"><circle cx="13" cy="13" r="9"/><circle cx="13" cy="13" r="4.5"/><circle cx="13" cy="13" r="1" fill="#E2A72C" stroke="none"/></svg></div><h3>Reach school heads</h3><p>&amp; Heads of Department</p></div>
      <div class="arw">→</div>
      <div class="node"><div class="ic"><svg viewBox="0 0 26 26" fill="none" stroke="#0A2542" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="5.5" width="18" height="16" rx="2.5"/><line x1="4" y1="10" x2="22" y2="10"/><line x1="8.5" y1="3" x2="8.5" y2="7"/><line x1="17.5" y1="3" x2="17.5" y2="7"/><path d="M9.5 15.5l2.2 2.2 4.3-4.3" stroke="#E2A72C"/></svg></div><h3>They book a call</h3><p>On Zoom or Google Meet</p></div>
      <div class="arw">→</div>
      <div class="node"><div class="ic"><svg viewBox="0 0 26 26" fill="none" stroke="#0A2542" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="20" height="13" rx="2.5"/><path d="M10.5 9.2l4.3 2.6-4.3 2.6z" fill="#E2A72C" stroke="none"/><line x1="9" y1="21.5" x2="17" y2="21.5"/></svg></div><h3>A specialist explains</h3><p>Your books, to the decider</p></div>
      <div class="arw">→</div>
      <div class="node"><div class="ic"><svg viewBox="0 0 26 26" fill="none" stroke="#0A2542" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3h6l4 4v16H6.5V4.5z"/><path d="M8.5 14l2.3 2.3 4.5-4.5" stroke="#E2A72C"/></svg></div><h3>Samples dispatched</h3><p>Your rep visits warm schools</p></div>
      <div class="arw">→</div>
      <div class="node"><div class="ic"><svg viewBox="0 0 26 26" fill="none" stroke="#0A2542" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="4,18 10,11 14,14 21,6"/><polyline points="16,6 21,6 21,11" stroke="#E2A72C"/></svg></div><h3>Follow up</h3><p>Direct access to the decider</p></div>
    </div>
    <p class="flow-note">This doesn't replace your field team — it fills their calendar.</p>
  </div>
</section>

<!-- SEASON TIMELINE -->
<section class="dark">
  <div class="wrap">
    <div class="center reveal"><span class="eyebrow d">The publishing calendar</span>
      <h2>Two seasons. One system.</h2></div>
    <div class="tl reveal">
      <svg viewBox="0 0 720 250" role="img" aria-label="Spend timeline across sampling and decision seasons">
        <defs>
          <linearGradient id="spend" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#E2A72C" stop-opacity="0.55"/><stop offset="1" stop-color="#E2A72C" stop-opacity="0.04"/>
          </linearGradient>
        </defs>
        <!-- season bands -->
        <rect x="40" y="46" width="213" height="150" fill="#E2A72C" opacity="0.09"/>
        <rect x="253" y="46" width="427" height="150" fill="#7C93D9" opacity="0.1"/>
        <line x1="253" y1="42" x2="253" y2="200" stroke="#7C93D9" stroke-width="1" stroke-dasharray="4 5" opacity="0.6"/>
        <!-- band titles -->
        <text x="146" y="34" fill="#E2A72C" font-family="Hanken Grotesk,sans-serif" font-size="14" font-weight="800" letter-spacing="2" text-anchor="middle">SAMPLING</text>
        <text x="466" y="34" fill="#A9B9E6" font-family="Hanken Grotesk,sans-serif" font-size="14" font-weight="800" letter-spacing="2" text-anchor="middle">DECISION</text>
        <!-- spend area -->
        <path d="M40,196 L40,92 C90,80 200,84 253,96 C360,120 470,150 573,164 C610,169 650,172 680,174 L680,196 Z" fill="url(#spend)"/>
        <path d="M40,92 C90,80 200,84 253,96 C360,120 470,150 573,164 C610,169 650,172 680,174" fill="none" stroke="#E2A72C" stroke-width="2.5"/>
        <!-- baseline -->
        <line x1="40" y1="196" x2="680" y2="196" stroke="#294066" stroke-width="1.5"/>
        <!-- month ticks -->
        <g fill="#A9B9E6" font-family="Hanken Grotesk,sans-serif" font-size="13" text-anchor="middle">
          <text x="40" y="216">Sep</text><text x="146" y="216">Oct</text><text x="253" y="216">Nov</text>
          <text x="360" y="216">Dec</text><text x="466" y="216">Jan</text><text x="573" y="216">Feb</text><text x="680" y="216">Mar</text>
        </g>
        <!-- spend annotations -->
        <text x="146" y="240" fill="#E2A72C" font-family="Hanken Grotesk,sans-serif" font-size="13" font-weight="700" text-anchor="middle">Reach hard · ₹1–₹5L adspend</text>
        <text x="466" y="240" fill="#A9B9E6" font-family="Hanken Grotesk,sans-serif" font-size="13" font-weight="700" text-anchor="middle">Convert warm · ₹50k–₹2L adspend</text>
      </svg>
    </div>
    <p class="tl-note">Sampling <b>Sep–Nov</b>, decisions <b>Dec–Mar</b>. <b>The sooner you start, the better.</b></p>
  </div>
</section>

<!-- PROOF -->
<section class="dark">
  <div class="kid-vector elephant" aria-hidden="true">
    <svg viewBox="0 0 140 115"><path d="M30 75C15 62 17 34 38 24c23-11 57-5 69 16 8 13 7 32-3 43-8 9-20 14-34 14H42z" fill="#8edbd5" stroke="#25345d" stroke-width="4" stroke-linejoin="round"/><path d="M97 45q32 10 21 37-7 16-22 6 11-3 9-16l-8-16z" fill="#8edbd5" stroke="#25345d" stroke-width="4"/><path d="M31 45C10 38 6 58 20 70c9 8 21 2 24-12" fill="#a894ef" stroke="#25345d" stroke-width="4"/><circle cx="82" cy="45" r="4" fill="#25345d"/><path d="M47 94v15m38-15v15" stroke="#25345d" stroke-width="6" stroke-linecap="round"/><path d="M53 26q9-16 19 0" fill="#ffd65c" stroke="#25345d" stroke-width="3"/></svg>
  </div>
  <div class="wrap">
    <div class="center reveal"><span class="eyebrow d">Proof</span>
      <h2>It ends in a book adoption.</h2></div>
    <div class="cms reveal">
      <div class="num">₹2Cr+<small>Books order</small></div>
      <div>
        <h3>City Montessori School, Lucknow — the world's largest school</h3>
        <p>We ran the same campaign for Propel Curriculum, Delhi.<br>CMS converted into 15,000 PBL sets across Grades 3–5 — and reordered the next year.</p>
      </div>
    </div>
    <div class="statband reveal">
      <div class="stat"><div class="n">200+</div><div class="l">Appointments booked · Propel</div></div>
      <div class="stat"><div class="n">300+</div><div class="l">Books published by our founder</div></div>
      <div class="stat"><div class="n">2,000+</div><div class="l">Schools reached first-hand</div></div>
      <div class="stat"><div class="n">11 yrs</div><div class="l">Inside education publishing</div></div>
    </div>
  </div>
</section>

<!-- PRICING -->
<section class="cream-2">
  <div class="kid-vector bear" aria-hidden="true">
    <svg viewBox="0 0 105 115"><circle cx="27" cy="27" r="15" fill="#f4a6c4" stroke="#25345d" stroke-width="4"/><circle cx="78" cy="27" r="15" fill="#f4a6c4" stroke="#25345d" stroke-width="4"/><path d="M18 62c0-28 15-44 35-44s35 16 35 44-15 45-35 45-35-17-35-45z" fill="#f4a6c4" stroke="#25345d" stroke-width="4"/><circle cx="40" cy="54" r="4" fill="#25345d"/><circle cx="66" cy="54" r="4" fill="#25345d"/><ellipse cx="53" cy="70" rx="16" ry="13" fill="#fff4d8" stroke="#25345d" stroke-width="3"/><path d="m53 65-6 5 6 4 6-4z" fill="#25345d"/><path d="M38 92q15 9 30 0" fill="none" stroke="#25345d" stroke-width="3" stroke-linecap="round"/></svg>
  </div>
  <div class="wrap">
    <div class="center reveal"><span class="eyebrow">The offer</span>
      <h2>Simple, aligned, no lock-in.</h2></div>
    <div class="price-grid reveal">
      <div class="price">
        <div class="amt"><span class="anchor">₹1,50,000</span>₹75,000 <span class="gst">+ GST / month</span></div>
        <div class="sub">Start any month · cancel anytime</div>
        <ul>
          <li><span class="mk">✓</span> Full Meta + Google management</li>
          <li><span class="mk">✓</span> All static creatives &amp; video editing</li>
          <li><span class="mk">✓</span> Lead capture</li>
          <li><span class="mk">✓</span> Qualified appointments booked</li>
        </ul>
      </div>
      <div class="price feat">
        <span class="badge">Most pick this</span>
        <div class="amt"><span class="anchor">₹4,50,000</span>₹1,00,000 <span class="gst">+ GST / month</span></div>
        <div class="freebie">3 months, pay for 2 — one month free</div>
        <div class="pay"><b>₹2L to start, ₹1L at day 30.</b></div>
        <ul>
          <li><span class="mk">✓</span> Full Meta + Google management</li>
          <li><span class="mk">✓</span> All static creatives &amp; video editing</li>
          <li><span class="mk">✓</span> Lead capture</li>
          <li><span class="mk">✓</span> Qualified appointments booked</li>
          <li><span class="mk">✓</span> Email &amp; WhatsApp reminder system</li>
          <li><span class="mk">✓</span> Email nurturing system</li>
        </ul>
      </div>
    </div>
    <p class="sixmo">Going all-in both seasons? <b>6-Month Engine — ₹6,00,000 + GST</b> (≈ ₹1L/mo).</p>
    <div class="twoline reveal">
      <div class="minibox"><div class="k">Booked meetings, scaled to spend</div><p><b>50–60/mo at ₹1L ad spend → 500 at ₹5L.</b></p></div>
      <div class="minibox"><div class="k">One adoption is a minimum two-year account</div><p>Orders run <b>₹2L–₹20L per school</b>. A single adoption can pay back the whole quarter.</p></div>
    </div>
  </div>
</section>

<!-- FIT -->
<section class="dark">
  <div class="wrap">
    <div class="center reveal"><span class="eyebrow d">Honest fit</span><h2>Built for publishers with real distribution.</h2></div>
    <div class="fit reveal">
      <div class="box yes"><h3>This is for you</h3><ul>
        <li><span class="mk">✓</span> K-12 publishers with a real catalogue</li>
        <li><span class="mk">✓</span> Research-backed, curriculum-aligned books</li>
        <li><span class="mk">✓</span> Concept, story &amp; theme-based series</li>
        <li><span class="mk">✓</span> STEM, STEAM &amp; AI titles</li>
        <li><span class="mk">✓</span> Books with a clear, defensible USP</li>
        <li><span class="mk">✓</span> Ready to sell across India</li>
        <li><span class="mk">✓</span> Aiming for India's top schools</li>
      </ul></div>
      <div class="box no"><h3>Not for you</h3><ul>
        <li><span class="mk x">✕</span> A single title, no catalogue behind it</li>
        <li><span class="mk x">✕</span> One-city, walk-in-only distribution</li>
        <li><span class="mk x">✕</span> No one to follow up on booked calls</li>
        <li><span class="mk x">✕</span> Chasing the cheapest possible leads</li>
      </ul></div>
    </div>
  </div>
</section>

<!-- FOUNDERS -->
<section class="dark" style="padding-top:0">
  <div class="wrap">
    <div class="center reveal"><span class="eyebrow d">Meet the founders</span><h2>Operators, not just agency owners.</h2></div>
    <div class="founders reveal">
      <div class="fcard"><div class="avatar" aria-hidden="true">MA</div><div>
        <h3>Mausam Arora</h3><div class="role">Founder · Growth &amp; Strategy</div>
        <p>12 years in education — 300+ books published, 2,000+ schools reached.</p></div></div>
      <div class="fcard"><div class="avatar" aria-hidden="true">KM</div><div>
        <h3>Kunal Mondal</h3><div class="role">Founder · Performance</div>
        <p>₹30Cr+ ad spend managed across 30+ brands in EdTech, e-com &amp; real estate.</p></div></div>
    </div>
  </div>
</section>

<!-- FAQ -->
<section class="dark" style="padding-top:0">
  <div class="kid-vector rainbow" aria-hidden="true">
    <svg viewBox="0 0 135 100"><path d="M17 82a51 51 0 0 1 102 0" fill="none" stroke="#f47c78" stroke-width="15" stroke-linecap="round"/><path d="M32 82a36 36 0 0 1 72 0" fill="none" stroke="#ffd65c" stroke-width="14" stroke-linecap="round"/><path d="M47 82a21 21 0 0 1 42 0" fill="none" stroke="#8edbd5" stroke-width="13" stroke-linecap="round"/><path d="M5 83c0-9 8-16 17-16 7 0 13 4 16 10 10-3 20 4 20 14H5zM78 91c0-10 9-18 19-16 4-8 12-13 21-11 10 2 16 11 15 20 7 1 12 7 12 14H78z" fill="#fff" stroke="#25345d" stroke-width="4" stroke-linejoin="round"/></svg>
  </div>
  <div class="wrap">
    <div class="center reveal"><span class="eyebrow d">Questions</span><h2>Quick answers.</h2></div>
    <div class="faq reveal">
      <details><summary>Will this replace my field team?<span class="ic">+</span></summary><p>No — it feeds them. Your reps walk into warm meetings with decision-makers who asked to see your books. The system books; your team closes.</p></details>
      <details><summary>Are school buyers even on Facebook?<span class="ic">+</span></summary><p>Yes. Principals, coordinators and chain owners are on Meta and Google daily. We target by role and geography, so budget only touches deciders.</p></details>
      <details><summary>I've boosted posts and got junk. How is this different?<span class="ic">+</span></summary><p>Boosting isn't a system. We optimise for qualified appointments — not form-fills — and use your lead-quality feedback to sharpen targeting every week.</p></details>
      <details><summary>Do you handle the calls and samples?<span class="ic">+</span></summary><p>No — that stays with you. We run the engine that books meetings and tracks every rupee; your team runs the walkthrough and the close.</p></details>
      <details><summary>When should I start?<span class="ic">+</span></summary><p>Any month works. Sampling (Sep–Nov) into decision season (Dec–Mar) is the natural cycle — the earlier you're in, the more adoptions close.</p></details>
    </div>
  </div>
</section>

<!-- FINAL -->
<section class="final" id="book">
  <div class="kid-vector rocket" aria-hidden="true">
    <svg viewBox="0 0 100 130"><path d="M50 8c24 18 30 50 18 78H32C20 58 26 26 50 8z" fill="#77a8f7" stroke="#25345d" stroke-width="4" stroke-linejoin="round"/><circle cx="50" cy="47" r="12" fill="#fff" stroke="#25345d" stroke-width="4"/><path d="M32 69 15 89l18 2m35-22 17 20-18 2" fill="#f47c78" stroke="#25345d" stroke-width="4" stroke-linejoin="round"/><path d="M40 87q-2 22 10 34 12-12 10-34z" fill="#ffd65c" stroke="#25345d" stroke-width="4"/><path d="M45 90q0 12 5 19 5-7 5-19z" fill="#f47c78"/></svg>
  </div>
  <div class="wrap reveal">
    <span class="eyebrow d" style="color:var(--gold)">Let's talk</span>
    <h2>Ready to let schools come to you?</h2>
    <p class="rl">A short call to see how you reach schools today and map the first campaign.</p>
    <a class="btn" href="https://forms.acquirely.in/acquirely/form/LeadGenFunnelReviewCall/formperma/DEijNOw1e1C4Wd8r6luSZlNxj1zQVtObr106aUYe4-0">Book a Funnel Review Call <span class="arw">→</span></a>
    <div class="chips"><span>✓ No lock-in</span><span>✓ Appointment-floor guarantee</span><span>✓ Full transparency</span></div>
  </div>
</section>

<footer><div class="wrap">
  <div class="foot-in"><div class="brand" style="font-size:1.15rem">Acquirely<span class="dot">.</span></div><div>team@acquirely.in · acquirely.in</div></div>
  <p class="disclaimer">This site is not a part of the Facebook™ website or Facebook™ Inc. Additionally, this site is NOT endorsed by Facebook™ in any way. FACEBOOK™ is a trademark of FACEBOOK™, Inc.</p>
</div></footer>

<script>
  const io=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.1,rootMargin:'0px 0px -8% 0px'});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
</script>
</body>
</html>
`;
