
export class Solicitud{
    _id?: number;
    user: string;
    date: string;
    details: {
        solicitud: {
            type: string,
            subject: string,
            description: string,
            status: boolean
        },
        reply: {
            description: string
        },
        isSatisfied: boolean | null
    };
    claim : {
        claim: {
            subject: string,
            description: string,
            status: boolean
        },
        reply: {
            description: string
        }
    };



    constructor(
        user:string, 
        date: string, 
        details: {
            solicitud: {
                type: string, 
                subject: string, 
                description: string, 
                status: boolean
            }, 
            reply : 
                {description: string}, 
            isSatisfied: boolean
        }, 
        claim: { 
            claim: {
                subject: string, 
                description: string, 
                status: boolean
            }, 
            reply: {description: string}
        }){
        this.user= user;
        this.date = date;
        this.details = details;
        this.claim = claim;
    }
}

