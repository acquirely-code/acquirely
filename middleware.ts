import { NextResponse, type NextRequest } from 'next/server'
import { createClient } from '@/utils/supabase/middleware'

export async function middleware(request: NextRequest) {
  // Old mixed-case URLs still used in ads, forms and shared links. Exact match, since Next's redirects() ignores case.
  const legacyPaths: Record<string, string> = { '/EdTech': '/edtech', '/EdTech-thank-you': '/edtech-thank-you' }
  // Pages removed for good: answer 410 Gone so Google drops them faster than with a 404.
  const gonePaths = new Set([
    '/case-studies',
    '/blog/meta-ads-vs-google-ads-for-ecommerce',
    '/blog/how-we-scaled-modish-7x',
    '/terms-and-condition',
  ])
  if (gonePaths.has(request.nextUrl.pathname.replace(/\/+$/, ''))) {
    return new NextResponse('410 Gone: this page has been permanently removed.', {
      status: 410,
      headers: { 'Content-Type': 'text/plain; charset=utf-8', 'X-Robots-Tag': 'noindex' },
    })
  }

  const newPath = legacyPaths[request.nextUrl.pathname]
  if (newPath) {
    const url = request.nextUrl.clone()
    url.pathname = newPath
    return NextResponse.redirect(url, 308)
  }

  try {
    // This `try/catch` block is only here for the interactive tutorial.
    // Feel free to remove once you have Supabase connected.
    const { supabase, response } = createClient(request)

    // Refresh session if expired - required for Server Components
    // https://supabase.com/docs/guides/auth/auth-helpers/nextjs#managing-session-with-middleware
    const {data} = await supabase.auth.getSession()

    return response
  } catch (e) {
    // If you are here, a Supabase client could not be created!
    // This is likely because you have not set up environment variables.
    // Check out http://localhost:3000 for Next Steps.
    return NextResponse.next({
      request: {
        headers: request.headers,
      },
    })
  }

}
export const config = {
  matcher: ['/((?!ecommerce-calculator).*)'],
}
